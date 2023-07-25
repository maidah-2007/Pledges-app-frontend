import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { PledgesService } from './pledges.service';
import { Pledges } from './schemas/pledges.schemas';
import { PledgesDTO } from './dtos/pledges.dto';
import { UpdatePledgesDTO } from './dtos/updatePledges.dto';

@Controller('pledges')
export class PledgesController {
  constructor(private readonly pledgesService: PledgesService) {}

  // Create a new Pledge
  @Post('new')
  async createNewPledge(@Body() createPledge: PledgesDTO): Promise<Pledges> {
    return await this.pledgesService.createNewPledge(createPledge);
  }

  // Get all pledges
  @Get()
  async getAllPledges(): Promise<Pledges[]> {
    return await this.pledgesService.getAllPledges();
  }

  // Get a pledge by ID
  @Get(':id')
  async getPledgeByID(@Param('id') id: string): Promise<Pledges> {
    return this.pledgesService.getPledgeByID(id);
  }

  // Update a Pledge by ID
  @Patch(':id')
  async updatePledge(
    @Param('id') id: string,
    @Body() updatePledge: UpdatePledgesDTO,
  ): Promise<Pledges> {
    return await this.pledgesService.updatePledge(id, updatePledge);
  }

  // Delete Pledge by ID
  @Delete(':id')
  async deletePledge(@Param('id') id: string) {
    return this.pledgesService.deletePledge(id);
  }
}
