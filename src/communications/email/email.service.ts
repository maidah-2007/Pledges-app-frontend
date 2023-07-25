import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as sendgrid from '@sendgrid/mail';
import * as mailchimp_transactional from '@mailchimp/mailchimp_transactional';
import { Model } from 'mongoose';
import {
  APP_NAME,
  EMAIL_FROM_ACCOUNT,
  EMAIL_SERVICE_KEY,
  EMAIL_SERVICE_TO_USE,
  MONGOSERVERDBNAME,
} from 'src/app.constants';
import { isEmailValid } from 'src/helperFunctions';
import { Email } from './email.model';
import {
  SIBASI_EMAIL_SERVICE_OPTIONS,
  SIBASI_EMAIL_SMS_TYPES,
} from 'src/app.enum';

@Injectable()
export class EmailService {
  constructor(
    @InjectModel(Email.name, MONGOSERVERDBNAME)
    private emailModel: Model<Email>,
  ) {}

  /**
   *
   * @param message The message to be sent
   * @param sendTo The email address that the message is to be sent to
   * @param messageHeading The email heading, Optional Parameter
   * @param emailType The type of email for analytics purposes
   * @param additionalEmailsTo An array of emails which should also be sent the same message
   */
  async sendEmail(
    message: string,
    sendTo: string[],
    messageHeading: string,
    emailType: SIBASI_EMAIL_SMS_TYPES,
  ) {
    const validEmails = [];
    const failedEmails = [];

    if (
      SIBASI_EMAIL_SERVICE_OPTIONS.SENDGRID ||
      SIBASI_EMAIL_SERVICE_OPTIONS.MAILCHIMP
    ) {
      // Proceed with the execution
    } else {
      throw new HttpException(
        'Unknown Email Service. Please consult the Support team',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    for (let i = 0; i < sendTo.length; i++) {
      if (isEmailValid(sendTo[i])) {
        validEmails.push(sendTo[i]);
      } else {
        failedEmails.push(sendTo[i]);
      }
    }

    if (validEmails.length == 0) {
      const emailToSave = new this.emailModel();
      emailToSave.message = message;
      emailToSave.messageSubject = messageHeading;
      emailToSave.isSent = false;
      emailToSave.failedToEmailAddress = failedEmails;
      emailToSave.emailType = emailType || null;
      await emailToSave.save();
      return false;
    }

    const sendgridMsg: sendgrid.MailDataRequired = {
      to: sendTo,
      from: EMAIL_FROM_ACCOUNT,
      subject: messageHeading ? messageHeading : `Hello from ${APP_NAME}`,
      text: message,
      html: message,
    } as sendgrid.MailDataRequired;

    const mailchimpMsg = {
      message: {
        from_email: EMAIL_FROM_ACCOUNT,
        from_name: APP_NAME,
        subject: messageHeading || `Hello from ${APP_NAME}`,
        text: message,
        html: message,
        headers: {
          'Reply-To': EMAIL_FROM_ACCOUNT,
        },
        to: sendTo,
      },
    };

    try {
      const emailToSave = new this.emailModel();
      emailToSave.requestToSendEmailStartTime = new Date();
      if (SIBASI_EMAIL_SERVICE_OPTIONS.SENDGRID) {
        sendgrid.setApiKey(EMAIL_SERVICE_KEY);
        const result = await sendgrid.send(sendgridMsg);
        emailToSave.providerStatusMessage = result[0].statusCode;
        emailToSave.succeededToEmailAddress = validEmails;
        emailToSave.failedToEmailAddress = failedEmails;
      } else if (SIBASI_EMAIL_SERVICE_OPTIONS.MAILCHIMP) {
        const mailchimp = mailchimp_transactional(EMAIL_SERVICE_KEY);
        const val: {
          email: string;
          status: string;
          _id: string;
          reject_reason: string;
        }[] = await mailchimp.messages.send(mailchimpMsg);
        for (let i = 0; i < val.length; i++) {
          if (val[i].status !== 'sent') {
            emailToSave.failedToEmailAddress.push(val[i].email);
          } else {
            emailToSave.succeededToEmailAddress.push(val[i].email);
            emailToSave.providerErrorIndividualMailReasons.push({
              emailTo: val[i].email,
              rejectReason: val[i].reject_reason,
            });
          }
        }
      } else {
        throw new Error('No provider selected');
      }
      emailToSave.emailToAll = sendTo;
      emailToSave.mailObject =
        EMAIL_SERVICE_TO_USE === SIBASI_EMAIL_SERVICE_OPTIONS.SENDGRID
          ? sendgridMsg
          : mailchimpMsg;
      emailToSave.message = message;
      emailToSave.messageSubject = messageHeading;
      emailToSave.isSent = true;
      emailToSave.messageHTML =
        EMAIL_SERVICE_TO_USE === SIBASI_EMAIL_SERVICE_OPTIONS.SENDGRID
          ? sendgridMsg?.html
          : mailchimpMsg?.message?.html;
      emailToSave.from_email = EMAIL_FROM_ACCOUNT;
      emailToSave.from_name = APP_NAME;
      emailToSave.emailToSendTo = sendgridMsg?.to?.toString() || null;
      emailToSave.emailType = emailType;
      emailToSave.requestToSendEmailEndTime = new Date();
      await emailToSave.save();
      return true;
    } catch (error) {
      const emailToSave = new this.emailModel();
      emailToSave.message = message;
      emailToSave.providerErrorReason = error.toString();
      emailToSave.messageSubject = messageHeading;
      emailToSave.isSent = false;
      emailToSave.emailToSendTo = sendgridMsg?.to?.toString() || null;
      emailToSave.succeededToEmailAddress = validEmails;
      emailToSave.failedToEmailAddress = failedEmails;
      emailToSave.emailType = emailType || null;
      await emailToSave.save();
      console.log(error);
      return false;
    }
  }

  async getSentEmails(): Promise<Email[]> {
    return await this.emailModel.find();
  }
}
