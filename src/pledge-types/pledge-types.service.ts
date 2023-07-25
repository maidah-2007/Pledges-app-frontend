import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePledgeTypeDTO } from './dto/create-pledge-type.dto';
import { UpdatePledgeTypeDTO } from './dto/update-pledge-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PledgeTypes } from './schemas/pledge-types.schema';

@Injectable()
export class PledgeTypesService {
  constructor(
    @InjectModel(PledgeTypes.name)
    private readonly pledgeTypesModel: Model<PledgeTypes>,
  ) {}

  async CreatePledgeType(
    createPledgeTypeDto: CreatePledgeTypeDTO,
  ): Promise<PledgeTypes> {
    const createdPledgeType = new this.pledgeTypesModel(createPledgeTypeDto);
    return createdPledgeType.save();
  }

  async GetAllPledgeTypes(): Promise<PledgeTypes[]> {
    return this.pledgeTypesModel.find().exec();
  }

  async GetPledgeTypeById(id: string): Promise<PledgeTypes> {
    const pledgeType = await this.pledgeTypesModel.findById(id).exec();
    if (!pledgeType) {
      throw new NotFoundException(`PledgeType with ID "${id}" not found.`);
    }
    return pledgeType;
  }

  async updatePledgeType(
    id: string,
    updatePledgeTypeDto: UpdatePledgeTypeDTO,
  ): Promise<PledgeTypes> {
    const updatedPledgeType = await this.pledgeTypesModel.findByIdAndUpdate(
      id,
      updatePledgeTypeDto,
      { new: true },
    );
    if (!updatedPledgeType) {
      throw new NotFoundException(`PledgeType with ID: ${id} not found.`);
    }
    return updatedPledgeType;
  }

  async deletePledgeType(id: string) {
    const foundPledgeType = await this.pledgeTypesModel.findById(id);
    if (!foundPledgeType) {
      throw new HttpException(
        `Could not find any pledgeType with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.pledgeTypesModel.findByIdAndRemove(id);
  }
}
