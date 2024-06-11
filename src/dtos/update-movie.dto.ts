import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsNotEmpty()
  director?: string;

  @IsOptional()
  @IsNotEmpty()
  releaseDate?: Date;
}
