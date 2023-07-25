import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { generateKenyanTimestamp } from 'src/utils/timestamp.util';

export enum CurrencyEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  KES = 'KES',
  // Add more currencies as needed
}

@Schema()
export class Pledges extends Document {
  @Prop()
  ApplicantName: string;

  @Prop()
  PhoneNumber: string;

  @Prop()
  Email: string;

  @Prop()
  PledgeAmount: number;

  @Prop({ type: Types.ObjectId, ref: 'PledgeTypes' })
  PledgeType: Types.ObjectId;

  @Prop()
  Currency: CurrencyEnum;

  @Prop({ type: Types.ObjectId, ref: 'Donations' })
  DonatedAmount: number;

  @Prop({ default: generateKenyanTimestamp })
  TimeStamp: string;
}

export const PledgesSchema = SchemaFactory.createForClass(Pledges);
