import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Product } from '../../models/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {}

  get stockStatus(): string {
    return this.product.stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  get isOutOfStock(): boolean {
    return this.product.stock === 0;
  }

  addToCart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    this.cartService.addToCart(this.product);
  }
}
