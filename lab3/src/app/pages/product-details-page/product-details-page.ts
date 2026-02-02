import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details-page',
  imports: [],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.scss',
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.product = this.productsService.getProductById(id);
    }
  }
}
