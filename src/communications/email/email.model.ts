import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document, SchemaTypes } from 'mongoose';
import { EMAIL_SERVICE_TO_USE } from 'src/app.constants';
import { SIBASI_EMAIL_SMS_TYPES } from 'src/app.enum';

@Schema()
export class Email extends Document {
  @Prop({ default: EMAIL_SERVICE_TO_USE, type: SchemaTypes.String })
  emailServiceToUse: string;

  @Prop()
  emailType: string;

  @Prop()
  message: string;

  @Prop()
  messageHTML: string;

  @Prop()
  messageText: string;

  @Prop()
  messageSubject: string;

  @Prop()
  emailToSendTo: string;

  @Prop()
  emailToAll: string[];

  @Prop()
  from_email: string;

  @Prop()
  from_name: string;

  @Prop({ type: SchemaTypes.Mixed })
  mailObject: any;

  @Prop()
  providerStatuscode: number;

  @Prop()
  providerStatusMessage: number;

  @Prop()
  providerStatusDescription: string;

  @Prop()
  succeededToEmailAddress: string[];

  @Prop()
  failedToEmailAddress: string[];

  @Prop()
  providerErrorReason: string;

  @Prop()
  providerErrorIndividualMailReasons: any[]; // { emailTo: string; rejectReason: string }[]

  @Prop({ type: SchemaTypes.Mixed })
  providerErrorDetails: any;

  @Prop()
  isSent: boolean;

  @Prop({ default: Date.now })
  requestToSendEmailStartTime: Date;

  @Prop()
  requestToSendEmailEndTime: Date;
}

export const EmailSchema = SchemaFactory.createForClass(Email);

export class EmailDTO {
  @ApiPropertyOptional()
  message: string;

  @ApiPropertyOptional()
  sendTo: string[];

  @ApiPropertyOptional()
  messageHeading: string;

  @ApiPropertyOptional()
  emailType?: SIBASI_EMAIL_SMS_TYPES;
}
