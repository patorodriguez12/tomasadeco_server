import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';

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

  // PUT /products/:id
  updateProduct(id: number, productDto: ProductDto) {
    return this.productsRepository.updateProduct(id, productDto);
  }

  // DELETE /products/:id
  deleteProduct(id: number) {
    return this.productsRepository.deleteProduct(id);
  }
}
