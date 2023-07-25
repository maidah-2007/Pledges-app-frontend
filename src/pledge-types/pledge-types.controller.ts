import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { PledgeTypesService } from './pledge-types.service';
import { PledgeTypes } from './schemas/pledge-types.schema';
import { CreatePledgeTypeDTO } from './dto/create-pledge-type.dto';
import { UpdatePledgeTypeDTO } from './dto/update-pledge-type.dto';

@Controller('pledgeTypes')
export class PledgeTypesController {
  constructor(private readonly pledgeTypesService: PledgeTypesService) {}

  @Post('new')
  async CreatePledgeType(
    @Body() createPledgeTypeDto: CreatePledgeTypeDTO,
  ): Promise<PledgeTypes> {
    return this.pledgeTypesService.CreatePledgeType(createPledgeTypeDto);
  }

  @Get()
  async GetAllPledgeTypes(): Promise<PledgeTypes[]> {
    return this.pledgeTypesService.GetAllPledgeTypes();
  }

  @Get(':id')
  async GetPledgeTypeById(@Param('id') id: string): Promise<PledgeTypes> {
    return this.pledgeTypesService.GetPledgeTypeById(id);
  }

  // Update a PledgeType by ID
  @Patch(':id')
  async updatePledgeType(
    @Param('id') id: string,
    @Body() updatePledgeTypeDto: UpdatePledgeTypeDTO,
  ): Promise<PledgeTypes> {
    return await this.pledgeTypesService.updatePledgeType(
      id,
      updatePledgeTypeDto,
    );
  }

  // Delete PledgeType by ID
  @Delete(':id')
  async deletePledgeType(@Param('id') id: string) {
    return this.pledgeTypesService.deletePledgeType(id);
  }
}
