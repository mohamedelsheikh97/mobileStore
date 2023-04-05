import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  counter:any;
  products:any ;
  constructor(private ProductsService:ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((response)=>{
      this.products=response;
      console.log(this.products);

    })

  }

  getApple(id:any){
      this.ProductsService.getProduct(id).subscribe((response)=>{
      this.products=this.products.filter((product:any)=>product.id=id);
    })
  }

  @Output() myEvent1 = new EventEmitter();
  count(){
    console.log('welcome');

  }

}


