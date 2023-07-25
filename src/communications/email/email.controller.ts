import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { EmailDTO } from './email.model';
import { EmailService } from './email.service';
import { SIBASI_EMAIL_SMS_TYPES } from 'src/app.enum';

@ApiTags('App: Email')
@ApiBearerAuth()
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  async sendMail(@Body() data: EmailDTO) {
    return await this.emailService.sendEmail(
      data.message,
      data.sendTo,
      data.messageHeading,
      SIBASI_EMAIL_SMS_TYPES.CONTROLLER_INITIATED,
    );
  }
}
