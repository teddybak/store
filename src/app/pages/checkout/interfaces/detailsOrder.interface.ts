export interface IEdetaillsOrder {
  details: [productID: number, productName: string, quantity: number];
  id: number;
  orderId: number;
}
