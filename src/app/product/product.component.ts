import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel = {
    id: 0,
    name: 'Carot'
  };

  constructor() { }

  ngOnInit(): void {
  }
  onBuy(): void {
    console.log('Congratulations! You bought a very good product.' );
  }

}
