import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoryService } from './../../../services/category/category.service';
import { ICategory } from './../../Models/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listOfCategories:ICategory[];
  constructor(private catService:CategoryService){
      this.listOfCategories =[];
     }

  ngOnInit(): void {
    this.listOfCategories = this.catService.getAllCategories();
  }

}
