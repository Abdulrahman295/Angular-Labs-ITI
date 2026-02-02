import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    // Check if product already exists in cart
    const exists = this.cartItems.some((item) => item.id === product.id);
    if (!exists) {
      this.cartItems.push(product);
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
