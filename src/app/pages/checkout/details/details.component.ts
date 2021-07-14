import { Observable } from 'rxjs';
import { ShoppingCartService } from './../../../shared/services/shopping-cart.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  @Output() emisor = new EventEmitter();

  valor!: Observable<number>;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {
    this.valor = this.shoppingCartSvc.totalAction$;
    this.emisor.emit(this.cart$);
  }
}
