import { Product } from '../models/product.interface';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Product One',
    price: 150,
    description: 'This is a great product with amazing features.',
    category: 'Electronics',
    image: 'https://picsum.photos/seed/product1/200',
    brand: 'BrandA',
    stock: 5,
  },
  {
    id: 2,
    title: 'Product Two',
    price: 200,
    description: 'Another excellent product for your needs.',
    category: 'Clothing',
    image: 'https://picsum.photos/seed/product2/200',
    brand: 'BrandB',
    stock: 0,
  },
  {
    id: 3,
    title: 'Product Three',
    price: 99,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    image: 'https://picsum.photos/seed/product3/200',
    brand: 'BrandC',
    stock: 12,
  },
];
