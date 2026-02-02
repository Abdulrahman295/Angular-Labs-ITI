import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/products.data';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
  getProductById(id: number): Product | undefined {
    return PRODUCTS.find((product) => product.id === id);
  }
}
