import { IEdetaillsOrder } from './interfaces/detailsOrder.interface';
import { async, waitForAsync } from '@angular/core/testing';
import { IOrder } from './../products/interfaces/order.interface';
import { OrderService } from './../products/services/order.service';
import { IProduct } from './../products/interfaces/product.interface';
import { IStores } from './interfaces/shop.interface';
import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { ICheckOut } from './interfaces/checkout.interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  languages: string[] = [];
  myForm!: NgForm;
  stores: IStores[] = [];
  products: IProduct[] = [];
  // productsInOrder: IOrder[] = [];
  productsInOrder: object = {};

  mostrar: any;

  myModel = {
    name: '',
    store: '',
    shippingAddress: '',
    city: '',
  };

  detailsOrders: IEdetaillsOrder[] = [];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.getShops().subscribe((data) => {
      this.stores = data;
    });
    this.shoppingCartService.cartAction$;
  }

  procesar(valores: any) {
    this.orderService.saveOrder(valores);
  }

  pro(evento: any) {
    this.mostrar = evento;
    let detalles: any = [];
    evento.subscribe((data: any) => {
      data.forEach((element: any, i: any) => {

      });
    });
  }
}
