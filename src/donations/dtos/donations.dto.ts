import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Types } from 'mongoose';

export class DonationsDTO {
  @IsString()
  @IsNotEmpty()
  ApplicantName: string;

  @IsString()
  @IsNotEmpty()
  PhoneNumber: string;

  @IsEmail()
  @IsOptional()
  Email: string;

  @IsNumber()
  @IsNotEmpty()
  DonatedAmount: number;

  @IsString()
  @IsNotEmpty()
  PaidThrough: string;

  @IsString()
  TransactionId: string;

  @IsString()
  Pledge: Types.ObjectId;

  @IsString()
  PledgeType: Types.ObjectId;
}
