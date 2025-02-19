import { IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsNumber()
  publishedYear: number;

  @IsString()
  genre: string;
}
