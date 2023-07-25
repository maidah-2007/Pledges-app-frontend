import { Module } from '@nestjs/common';
import { PledgeTypesService } from './pledge-types.service';
import { PledgeTypesController } from './pledge-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PledgeTypeSchema, PledgeTypes } from './schemas/pledge-types.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PledgeTypes.name,
        schema: PledgeTypeSchema,
      },
    ]),
  ],
  controllers: [PledgeTypesController],
  providers: [PledgeTypesService],
})
export class PledgeTypesModule {}
