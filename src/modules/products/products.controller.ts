import { Controller, Get, Param, Query } from '@nestjs/common';
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

  // GET /products/:id
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }
}
