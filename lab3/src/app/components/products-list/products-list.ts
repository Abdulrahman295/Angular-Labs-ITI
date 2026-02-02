import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {
  @Input() products!: Product[];
}
