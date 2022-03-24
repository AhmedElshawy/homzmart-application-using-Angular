import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numberOfCartItems:number;
  constructor(private productService:ProductsService) {
    this.numberOfCartItems = 0;
   }

  ngOnInit(): void {
    this.productService.getNumberOfCartItems().subscribe((data)=>{
      this.numberOfCartItems = data;
    });
  }

}
