import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:IProduct[];
  numberOfProductsInCart:number;
  totalPrice:number;
  constructor(private productsService:ProductsService) {
    this.cartProducts = [];
    this.numberOfProductsInCart = 0;
    this.totalPrice = 0;  
   }

  ngOnInit(): void {
    this.cartProducts = this.productsService.getCartProducts();
    this.numberOfProductsInCart = this.cartProducts.length;
    this.calcTotalPrice();
  }

  // caluculating total price
  calcTotalPrice()
  {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += this.cartProducts[i].price
    }
  }
}
