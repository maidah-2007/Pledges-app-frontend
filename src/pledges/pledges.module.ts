import { Module } from '@nestjs/common';
import { PledgesService } from './pledges.service';
import { PledgesController } from './pledges.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pledges, PledgesSchema } from './schemas/pledges.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pledges.name, schema: PledgesSchema }]),
  ],
  providers: [PledgesService],
  controllers: [PledgesController],
})
export class PledgesModule {}
