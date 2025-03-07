import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  // GET /products
  getProducts(page = 1, limit = 5) {
    return this.productsRepository.getProducts(page, limit);
  }

  // GET /products?name=...
  getProductByName(name: string) {
    return this.productsRepository.getProductByName(name);
  }

  // GET /products/:id
  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }

  // PUT /products/:id
  updateProduct(id: number, productDto: ProductDto) {
    return this.productsRepository.updateProduct(id, productDto);
  }

  // DELETE /products/:id
  deleteProduct(id: number) {
    return this.productsRepository.deleteProduct(id);
  }
}
