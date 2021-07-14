import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private endPointApi = 'http://localhost:3000';
  private products: IProduct[] = [];
  constructor(private _http: HttpClient) {}

  getProudcts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.endPointApi}/products`);
  }
}
