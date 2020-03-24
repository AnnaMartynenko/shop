import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

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
  onBuy(): void {
    console.log('Congratulations! You bought a very good product.' );
  }

}
