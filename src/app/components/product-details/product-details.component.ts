import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from './../../../services/products.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId:any;
  product:any;
  constructor(private router:Router,private ProductsService:ProductsService,private activatedRoute: ActivatedRoute,private CartService:CartService){
    this.productId=this.activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.ProductsService.getProduct(this.productId).subscribe((response)=>{
      this.product=response;
      console.log(this.product);

    })
  }
  add(e:any){
    this.CartService.addProduct(this.product).subscribe((response)=>{})
    console.log(this.product);

  }

}
