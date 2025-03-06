import { Body, Controller, Delete, Get, Param, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

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

  // PUT /products/:id
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() ProductDto: ProductDto) {
    return this.productsService.updateProduct(Number(id), ProductDto);
  }

  // DELETE /products/:id
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
