import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { generateKenyanTimestamp } from 'src/utils/timestamp.util';

@Schema()
export class Donations extends Document {
  @Prop()
  ApplicantName: string;

  @Prop()
  PhoneNumber: string;

  @Prop()
  Email: string;

  @Prop()
  DonatedAmount: number;

  @Prop()
  PaidThrough: string;

  @Prop()
  TransactionId: string;

  @Prop({ type: Types.ObjectId, ref: 'Pledges' })
  Pledge: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'PledgeTypes' })
  PledgeType: Types.ObjectId;

  @Prop({ default: generateKenyanTimestamp })
  TimeStamp: string;
}

export const DonationsSchema = SchemaFactory.createForClass(Donations);
