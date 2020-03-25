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
  private sub :Subscription;
  public selectedProducts: Array<ProductModel>;
  productsArePresent: boolean;

  constructor(public cartServiceService: CartService){
  }

  ngOnInit(): void {
    console.log ('subscribe');   
    this.sub = this.cartServiceService.channel$.subscribe(this.updateCart);
  }

  onDestroy(){
    this.sub.unsubscribe();
  }

  public updateCart(product: ProductModel)
  {    
    this.productsArePresent = true;
    if (this.selectedProducts==null)
    {
      this.selectedProducts = new Array<ProductModel> ();
    }
    this.selectedProducts.push(product);
  }

}
