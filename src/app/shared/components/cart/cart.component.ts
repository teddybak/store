import { Component } from '@angular/core';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  total = this.shoppingCartSVC.totalAction$;
  qtyCart = this.shoppingCartSVC.qtyAction$;
  carrito = this.shoppingCartSVC.cartAction$;
  constructor(private shoppingCartSVC: ShoppingCartService) {}
}
