import { Injectable } from '@angular/core';
import { ProductModel } from '../../model/product-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<ProductModel> = new Array<ProductModel>();
  private channel = new Subject<ProductModel>();
  public channel$ = this.channel.asObservable();
  constructor() {
    console.log ('constructor created');
  }

  addToCard(product: ProductModel) {
    console.log('Product ' + product.name + ' is added to card' );
    this.channel.next(product);
    this.products.push(product);
  }

  getSelectedProducts() {
    return this.products;
  }
}
