import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details-page',
  imports: [],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.scss',
})
export class ProductDetailsPage {
  product: Signal<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = toSignal(this.productsService.getProductById(id));
  }
}
