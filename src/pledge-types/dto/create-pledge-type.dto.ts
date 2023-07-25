import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePledgeTypeDTO {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  StartDate: string;

  @IsString()
  @IsNotEmpty()
  EndDate: string;

  @IsString()
  @IsNotEmpty()
  Description: string;
}
