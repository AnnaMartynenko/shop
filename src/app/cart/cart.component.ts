import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../product-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private sub: Subscription;
  public selectedProducts: Array<ProductModel>;

  constructor(public cartServiceService: CartService) {
  }

  ngOnInit(): void {
    this.selectedProducts = new Array<ProductModel> ();
    console.log ('subscribe');
    this.sub = this.cartServiceService.channel$.subscribe(product => {
      this.selectedProducts.push(product);
    });
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}
