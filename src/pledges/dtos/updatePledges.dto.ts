import {
  IsEmpty,
  IsEmail,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { CurrencyEnum } from '../schemas/pledges.schemas';
import { PartialType } from '@nestjs/mapped-types';
import { PledgesDTO } from './pledges.dto';
import { Types } from 'mongoose';

export class UpdatePledgesDTO extends PartialType(PledgesDTO) {
  @IsOptional()
  @IsString()
  ApplicantName: string;

  @IsOptional()
  @IsString()
  PhoneNumber: string;

  @IsOptional()
  @IsEmail()
  Email: string;

  @IsOptional()
  @IsNumber()
  PledgeAmount: number;

  @IsOptional()
  PledgeType: Types.ObjectId;

  @IsOptional()
  Currency: CurrencyEnum;

  @IsEmpty()
  DonatedAmount: number;

  @IsEmpty()
  TimeStamp: string;
}
