import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Donations } from './schemas/donations.schemas';
import { DonationsDTO } from './dtos/donations.dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post('new')
  async MakeDonation(@Body() donationsDto: DonationsDTO): Promise<Donations> {
    return this.donationsService.MakeDonation(donationsDto);
  }

  @Get()
  async GetAllDonations(): Promise<Donations[]> {
    return this.donationsService.GetAllDonations();
  }

  @Get(':id')
  async GetDonationById(@Param('id') id: string): Promise<Donations> {
    return this.donationsService.GetDonationById(id);
  }

  @Delete(':id')
  async DeleteDonationById(@Param('id') id: string): Promise<Donations> {
    return this.donationsService.DeleteDonationById(id);
  }
}
