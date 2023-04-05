import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:any ;
  constructor(private ProductsService:ProductsService) {

  }
  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((response)=>{
      this.products=response;
    })
  }
  removeProduct(id:any){
    this.ProductsService.deleteProduct(id).subscribe((response)=>{
      this.products= this.products.filter((product:any)=>product.id!=id)
    })
  }


}
