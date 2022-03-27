import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { IProduct } from 'src/app/Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private produts:IProduct[];
  private numberOfCartItems: BehaviorSubject<number>;
  private counter;
  private cartProducts:IProduct[];
  constructor(private http:HttpClient) {
    this.counter =0;
    this.numberOfCartItems = new BehaviorSubject(this.counter);
    this.cartProducts =[];   
    this.produts = [
      {
        "id": 1,
        "name": "accusamus beatae ad facilis",
        "price": 3000,
        "quantity": 5,
        "imgUrl":"../assets/products imgs/chairs/img1.jpg",
        "catId":1
      },
      {
          "id": 2,
          "name": "accusamus beatae",
          "price": 3400,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/chairs/img2.jpg",
          "catId":1
        },
        {
          "id": 3,
          "name": "accusamus beatae ad facilis",
          "price": 3000,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/chairs/img3.jpg",
          "catId":1
        },
        {
          "id": 4,
          "name": "accusamus",
          "price": 3000,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/chairs/img4.jpg",
          "catId":1
        },
        {
          "id": 5,
          "name": "accusamus",
          "price": 4500,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/Sofa/img1.jpg",
          "catId":2
        },
        {
          "id": 6,
          "name": "accusamus",
          "price": 4500,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/Sofa/img2.jpg",
          "catId":2
        },
        {
          "id": 7,
          "name": "accusamus",
          "price": 4500,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/Sofa/img3.jpg",
          "catId":2        
        },
        {
          "id": 8,
          "name": "accusamus",
          "price": 4500,
          "quantity": 5,
          "imgUrl":"../assets/products imgs/Sofa/img4.jpg",
          "catId":2        
        }
    ]
  }

  getAllProducts():IProduct[]
  {
    return this.produts
  }

  getProductsByCatId(catId:number):IProduct[]
  {
    if (catId == 0)
        return this.produts;
      else
        return this.produts.filter(prd => prd.catId == catId);
  }

  getCartProducts():IProduct[]
  {
    return this.cartProducts;
  }

  addToCart(_id:number):void
  {
    let product:IProduct | undefined = this.produts.find((pro)=>{
          return pro.id == _id;
        });    
      this.cartProducts.push(product!);      
      this.numberOfCartItems.next(++this.counter);
  }

  getNumberOfCartItems()
  {
    return this.numberOfCartItems.asObservable();
  }
}
