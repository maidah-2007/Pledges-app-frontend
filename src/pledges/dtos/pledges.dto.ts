import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Types } from 'mongoose';
import { CurrencyEnum } from '../schemas/pledges.schemas';

export class PledgesDTO {
  @IsNotEmpty()
  @IsString()
  ApplicantName: string;

  @IsNotEmpty()
  @IsString()
  PhoneNumber: string;

  @IsEmail()
  @IsOptional()
  Email: string;

  @IsNotEmpty()
  @IsNumber()
  PledgeAmount: number;

  @IsString()
  PledgeType: Types.ObjectId;

  @IsNotEmpty()
  Currency: CurrencyEnum;

  @IsNumber()
  DonatedAmount: number;
}
