import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pledges } from './schemas/pledges.schemas';
import { PledgesDTO } from './dtos/pledges.dto';
import { UpdatePledgesDTO } from './dtos/updatePledges.dto';

@Injectable()
export class PledgesService {
  constructor(
    @InjectModel(Pledges.name) private pledgesModel: Model<Pledges>,
  ) {}

  // Create a new pledgeType
  async createNewPledge(createPledge: PledgesDTO): Promise<Pledges> {
    return await this.pledgesModel.create(createPledge);
  }

  // Get all pledges
  async getAllPledges(): Promise<Pledges[]> {
    return await this.pledgesModel.find().populate('PledgeType').exec();
  }

  // Get a pledge by ID
  async getPledgeByID(id: string): Promise<Pledges> {
    const foundPledge = await this.pledgesModel.findById(id);

    if (!foundPledge) {
      throw new HttpException(
        `Could not find any pledge with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return foundPledge.populate('PledgeType');
  }

  // Update a pledge by ID
  async updatePledge(
    id: string,
    updatePledge: UpdatePledgesDTO,
  ): Promise<Pledges> {
    const foundPledge = await this.pledgesModel.findById(id);
    if (!foundPledge) {
      throw new HttpException(
        `Could not find any pledge with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedPledge = await this.pledgesModel.findByIdAndUpdate(
      id,
      updatePledge,
      { new: true },
    );
    if (!updatedPledge) {
      throw new HttpException(
        `Failed to update pledge with id: ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return updatedPledge;
  }

  async deletePledge(id: string) {
    const foundPledge = await this.pledgesModel.findById(id);
    if (!foundPledge) {
      throw new HttpException(
        `Could not find any pledge with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.pledgesModel.findByIdAndRemove(id);
  }
}

// TODO: Calculate Pledges => Donations - Pledges
