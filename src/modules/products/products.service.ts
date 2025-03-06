import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  // GET /products
  getProducts() {
    return this.productsRepository.getProducts();
  }

  // GET /products?name=...
  getProductByName(name: string) {
    return this.productsRepository.getProductByName(name);
  }

  // GET /products/:id
  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }
}
