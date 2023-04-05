import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  productId:any;

  constructor(private router:Router,private ProductsService:ProductsService,private activatedRoute: ActivatedRoute){
    this.productId=this.activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    console.log(this.productId);

  }

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    Price: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required,Validators.minLength(3)]),
    img: new FormControl('',[Validators.required])
  });
  get getName(){
    return this.loginForm.controls['name'];
  }
  get getPrice(){
    return this.loginForm.controls['Price'];
  }
  get getDescription(){
    return this.loginForm.controls['description'];
  }
  get getimg(){
    return this.loginForm.controls['img'];
  }
  login(e:any){
    if(this.loginForm.status=='VALID'){
      this.ProductsService.addProduct(this.loginForm.value).subscribe((response)=>{})
      this.router.navigate(['/dashboard'])
      console.log(this.loginForm.value);

    }
    else{
      e.preventDefault();
    }
  }
  alterProduct(e:any){
    if(this.loginForm.status=='VALID'){
      this.ProductsService.editProduct(this.productId,this.loginForm.value).subscribe((response)=>{})
      this.router.navigate(['/dashboard'])
    }
    else{
      e.preventDefault();
    }

  }
}
