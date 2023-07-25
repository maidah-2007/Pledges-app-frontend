import { PartialType } from '@nestjs/swagger';
import { CreatePledgeTypeDTO } from './create-pledge-type.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePledgeTypeDTO extends PartialType(CreatePledgeTypeDTO) {
  @IsOptional()
  @IsString()
  Name: string;

  @IsOptional()
  @IsString()
  StartDate: string;

  @IsOptional()
  @IsString()
  EndDate: string;

  @IsOptional()
  @IsString()
  Description: string;
}
