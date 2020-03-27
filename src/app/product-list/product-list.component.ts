import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../product-model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductsService] сервис уже зарегистрирован в собственном декораторе
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(productsServiceService: ProductsService, private cartService :CartService){
    this.products = productsServiceService.getProducts();
  }

  ngOnInit(): void { }

  onBuy (product: ProductModel): void {
    this.cartService.addToCard(product);
    console.log('Congratulations! You bought ' + product.name + ' for a very good price ' + product.price + ' $' );
  }
}
