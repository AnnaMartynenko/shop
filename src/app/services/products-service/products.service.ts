import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../model/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = PRODUCTS;

  constructor() { }

  getProducts() {
    return this.products;
   }
}
