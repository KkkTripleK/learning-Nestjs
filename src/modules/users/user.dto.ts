import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
