import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.counter1
  }
  counter1:any;
  getData(e:any){
    this.counter1=e;
    console.log(this.counter1);

  }
}
