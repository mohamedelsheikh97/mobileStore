import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{
constructor(private CartService:CartService){}

  count=0;
  @Input() productItem:any={};
  // add(e:any){
  //   this.count++
  //   this.CartService.editProduct("count:0").subscribe((response)=>{})
  //   e.preventDefault()

  // }

}
