import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PledgeTypesModule } from './pledge-types/pledge-types.module';
import { PledgesModule } from './pledges/pledges.module';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pledges-app'),
    UserModule,
    PledgeTypesModule,
    PledgesModule,
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
