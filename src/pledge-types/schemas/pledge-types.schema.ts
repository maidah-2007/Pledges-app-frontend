import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PledgeTypes extends Document {
  @Prop()
  Name: string;

  @Prop()
  StartDate: string;

  @Prop()
  EndDate: string;

  @Prop()
  Description: string;
}

export const PledgeTypeSchema = SchemaFactory.createForClass(PledgeTypes);
