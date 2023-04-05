import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{
  product:any
  sum:any
  constructor(private CartService:CartService){}
  ngOnInit(): void {
    this.CartService.getAllProducts().subscribe((response)=>{
      this.product=response;
      console.log(this.product);
    })
    this.getTotal()
  }
  getTotal(){
    for (let e of this.product){
      this.sum += e.Price;
      console.log(this.sum);

  }
}
  removeProduct(id:any){
    this.CartService.deleteProduct(id).subscribe((response)=>{
      this.product= this.product.filter((product:any)=>product.id!=id)
    })
    this.getTotal()
  }


}


