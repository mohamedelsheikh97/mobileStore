import { Component, Input } from '@angular/core';
import { CartService } from './../../../services/cart.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent {
  @Input() productItem:any={};
  productId:any;
  constructor(private CartService:CartService,private activatedRoute: ActivatedRoute){
    this.productId=this.activatedRoute.snapshot.params['id']
  }
  removeProduct(id:any){
    this.CartService.deleteProduct(this.productId).subscribe((response)=>{

    })
    console.log(this.productId);

  }
}
