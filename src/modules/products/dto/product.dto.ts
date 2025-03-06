import { IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsString()
  price: string;

  @IsString()
  stock: string;

  @IsString()
  featured: string;

  @IsString()
  createdAt: string;
}
