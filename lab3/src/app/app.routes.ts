import { Routes } from '@angular/router';
import { ProductsPage } from './pages/products-page/products-page';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { CartPage } from './pages/cart-page/cart-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsPage },
  { path: 'product/:id', component: ProductDetailsPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'cart', component: CartPage, canActivate: [authGuard] },
  { path: '**', component: NotFoundPage },
];
