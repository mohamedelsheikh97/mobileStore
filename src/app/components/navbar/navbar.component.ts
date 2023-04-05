import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter:any;
  constructor(private CartService:CartService) {}
  ngOnInit(): void {
    this.CartService.getAllProducts().subscribe((response)=>{
      this.counter=response;
      console.log(this.counter);

    })
  }
}
