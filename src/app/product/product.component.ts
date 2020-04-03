import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../model/mock-products';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  // надо укзаать тип для параметра
  onBuy(product: ProductModel): void {
    console.log('Congratulations! You bought ' + product.name + ' for a very good price ' + product.price + ' $' );
  }

}
