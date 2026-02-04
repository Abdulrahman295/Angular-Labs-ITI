import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';
import { ProductsList } from '../../components/products-list/products-list';

@Component({
  selector: 'app-products-page',
  imports: [ProductsList],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  private productsService = inject(ProductsService);

  products = toSignal(this.productsService.getProducts(), { initialValue: [] as Product[] });
}
