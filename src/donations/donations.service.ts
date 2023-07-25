import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donations } from './schemas/donations.schemas';
import { DonationsDTO } from './dtos/donations.dto';

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(Donations.name)
    private readonly donationsModel: Model<Donations>,
  ) {}

  async MakeDonation(donationsDto: DonationsDTO): Promise<Donations> {
    const createdDonation = new this.donationsModel(donationsDto);
    return createdDonation.save();
  }

  async GetAllDonations(): Promise<Donations[]> {
    return this.donationsModel
      .find()
      .populate('Pledge')
      .populate('PledgeType')
      .exec();
  }

  async GetDonationById(id: string): Promise<Donations> {
    return this.donationsModel
      .findById(id)
      .populate('Pledge')
      .populate('PledgeType')
      .exec();
  }

  async DeleteDonationById(id: string): Promise<Donations> {
    const donation = await this.donationsModel.findById(id);
    if (!donation) {
      throw new HttpException(
        `Could not find any donation with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.donationsModel.findByIdAndDelete(id);
  }
}
