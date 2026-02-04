import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../models/cart-item.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [MatListModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  constructor(private cartService: CartService) {}

  get cartItems(): CartItem[] {
    return this.cartService.getCartItems();
  }

  get isEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  get totalCount(): number {
    return this.cartService.getTotalCount();
  }

  increment(productId: number): void {
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: number): void {
    this.cartService.decrementQuantity(productId);
  }

  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
