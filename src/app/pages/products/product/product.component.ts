import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IProduct } from './../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() prod!: IProduct;
  @Output() emisor = new EventEmitter<IProduct>();
  constructor() {}

  comprar(product: IProduct) {
    this.emisor.emit(product);
  }
}
