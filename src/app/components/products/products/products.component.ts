import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products/products.service';
import { IProduct } from './../../../Models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  currentCatId:number = 0;
  products:IProduct[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private proService:ProductsService) {
    this.products = [];
   }
  ngOnInit(): void { 
   this.activatedRoute.paramMap.subscribe((data)=>{
     this.currentCatId =Number(data.get('catId'));
     this.products = this.proService.getProductsByCatId(this.currentCatId);
   }) 
  }
}
