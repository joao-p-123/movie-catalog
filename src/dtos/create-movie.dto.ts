import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  releaseDate: Date;
}
