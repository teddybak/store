import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  endPointUrl: string = 'http://localhost:3000/orders';
  constructor(private _http: HttpClient) {}
  saveOrder(order: any) {
    return this._http
      .post<any>(`${this.endPointUrl}`, order)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
