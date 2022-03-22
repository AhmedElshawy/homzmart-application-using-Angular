import { Injectable } from '@angular/core';
import { ICategory } from './../../app/Models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private catigoriesList: ICategory[];
  constructor() {
    this.catigoriesList = [
      { name: 'chair', id: 1, catImgUrl: '../../assets/categories/cat1.png' },
      { name: 'sofa', id: 2, catImgUrl: '../../assets/categories/cat2.png' },
      {
        name: 'lightinging',
        id: 3,
        catImgUrl: '../../assets/categories/cat3.png',
      },
      { name: 'storage', id: 4, catImgUrl: '../../assets/categories/cat4.png' },
    ];
  }

  getAllCategories(): ICategory[] {
    return this.catigoriesList;
  }
}
