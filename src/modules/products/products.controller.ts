import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products
  @Get()
  getProducts(@Query('name') name?: string) {
    if (name) {
      return this.productsService.getProductByName(name);
    }

    return this.productsService.getProducts();
  }
}
