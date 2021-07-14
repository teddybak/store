import { IStores } from './../../pages/checkout/interfaces/shop.interface';
import { IProduct } from './../../pages/products/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  products: IProduct[] = [];

  private cartSubjet = new BehaviorSubject<IProduct[]>([]);
  private totalSubjet = new BehaviorSubject<number>(0);
  private qtySubjet = new BehaviorSubject<number>(0);

  constructor(private _http: HttpClient) {}

  // cantidad monetaria total en el carrito
  get totalAction$(): Observable<number> {
    return this.totalSubjet.asObservable();
  }

  //unidades en el carrito
  get qtyAction$(): Observable<number> {
    return this.qtySubjet.asObservable();
  }

  // Todos los elementos del carrito
  get cartAction$(): Observable<IProduct[]> {
    return this.cartSubjet.asObservable();
  }

  private calcularTotalOrden(): void {
    // let total = this.products.reduce(  (acc, prod) => (acc += prod.price * prod.qty),   0 );
    // this.totalSubjet.next(total);

    const sum = this.products.reduce(
      (total, prod) => (total += prod.price * prod.qty),
      0
    );
    console.log('sum..', sum);
    this.totalSubjet.next(sum);
  }

  private qtyProducts(): void {
    const quantity = this.products.reduce(
      (total, prod) => (total += prod.qty),
      0
    );
    this.qtySubjet.next(quantity);
  }

  private addToCart(product: IProduct) {
    const isProductInCart = this.products.find(({ id }) => id === product.id);

    if (isProductInCart) {
      isProductInCart.qty += 1;
    } else {
      this.products.push({ ...product, qty: 1 });
    }

    this.cartSubjet.next(this.products);
  }

  updateCart(product: IProduct) {
    this.addToCart(product);
    this.qtyProducts();
    this.calcularTotalOrden();
  }

  getShops(): Observable<IStores[]> {
    return this._http.get<IStores[]>(`http://localhost:3000/stores`);
  }
}
