import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { Login2Component } from './components/login2/login2.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'form',component:FormComponent},
  {path:'form/new' , component: FormComponent},
  {path:'dashboard/:id', component:FormComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'myCart',component:MyCartComponent},
  {path:'login2',component:Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
