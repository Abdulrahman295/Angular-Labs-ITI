import { Component } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CartService } from '../../services/cart.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [MatListModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  constructor(private cartService: CartService) {}

  get cartItems(): Product[] {
    return this.cartService.getCartItems();
  }

  get isEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
