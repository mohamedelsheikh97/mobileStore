import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  constructor(private router:Router){}
  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("admin")]),
    description: new FormControl('',[Validators.required,Validators.pattern("admin")]),
  });

  get getName(){
    return this.loginForm.controls['name'];
  }
  get getDescription(){
    return this.loginForm.controls['description'];
  }

  login(e:any){
    if(this.loginForm.status=='VALID'){
      this.router.navigate(['/dashboard'])

    }
    else{
      e.preventDefault();
    }
}
}
