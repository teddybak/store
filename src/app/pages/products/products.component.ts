import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { IProduct } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  currentProductOnTheCart: IProduct[] = [];
  constructor(
    private productSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc.getProudcts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: IProduct) {
    this.shoppingCartSvc.updateCart(product);
    console.log(`Has anadido el siguiente producto al carrito ${product.id}`);
  }
}
