import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ProductsComponent } from './components/products/products/products.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch: 'full'},
  {path:'home' ,component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'products/:catId' , component:ProductsComponent},
  {path:'cart' ,component:CartComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
