import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
  }

  incrementQuantity(productId: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);

    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(productId: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);

    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotalCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
