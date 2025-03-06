import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsNumber()
  stock: number;

  @IsBoolean()
  featured: boolean;

  @IsString()
  createdAt: string;
}
