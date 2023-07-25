import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Donations, DonationsSchema } from './schemas/donations.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Donations.name, schema: DonationsSchema },
    ]),
  ],
  providers: [DonationsService],
  controllers: [DonationsController],
  exports: [DonationsService],
})
export class DonationsModule {}
