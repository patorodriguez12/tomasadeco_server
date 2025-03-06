import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private readonly products = [
    {
      id: 1,
      name: 'Product 1',
      price: 40,
      description: 'This is a product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 10,
      category: 'Category 1',
      featured: true,
      createdAt: '2025-01-01',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 50,
      description: 'This is another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 5,
      category: 'Category 2',
      featured: false,
      createdAt: '2025-01-05',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 60,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 3,
      category: 'Category 3',
      featured: true,
      createdAt: '2025-01-10',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 70,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 2,
      category: 'Category 2',
      featured: false,
      createdAt: '2025-01-15',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 80,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 1,
      category: 'Category 1',
      featured: false,
      createdAt: '2025-01-20',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 90,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 8,
      category: 'Category 3',
      featured: true,
      createdAt: '2025-01-25',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 100,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 7,
      category: 'Category 2',
      featured: false,
      createdAt: '2025-02-01',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 110,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 6,
      category: 'Category 1',
      featured: false,
      createdAt: '2025-01-05',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 120,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 4,
      category: 'Category 3',
      featured: true,
      createdAt: '2025-02-10',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 130,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 9,
      category: 'Category 2',
      featured: false,
      createdAt: '2025-02-10',
    },
    {
      id: 11,
      name: 'Product 11',
      price: 140,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 10,
      category: 'Category 1',
      featured: false,
      createdAt: '2025-02-03',
    },
    {
      id: 12,
      name: 'Product 12',
      price: 150,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 15,
      category: 'Category 3',
      featured: true,
      createdAt: '2025-02-01',
    },
    {
      id: 13,
      name: 'Product 13',
      price: 160,
      description: 'This is yet another product description.',
      image: 'https://placehold.co/600x400/png',
      stock: 8,
      category: 'Category 2',
      featured: false,
      createdAt: '2025-02-10',
    },
  ];

  // GET /products
  async getProducts() {
    return this.products;
  }

  // GET /products?name=...
  async getProductByName(name: string) {
    return this.products.filter((product) => product.name === name);
  }

  // GET /products/:id
  async getProductById(id: number) {
    if (!this.products.find((product) => product.id === id)) {
      return `Product with id ${id} not found`;
    }

    return this.products.find((product) => product.id === id);
  }
}
