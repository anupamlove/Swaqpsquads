import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from './validation';
import { authService } from './auth.service';
import { LoginService } from '../services/login/login.service';
import { UserDao } from '../models/login/user-dao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  errorMessage:string;

  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private router: Router) {
    this.form=new FormGroup({
      email:new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:new FormControl("", [Validators.required,Validators.minLength(6), Validators.maxLength(15)])
    });
  }

    ngOnInit(): void {
      // this.form = this.formBuilder.group(
      //   {
      //     email: ['', [Validators.required, Validators.email]],
      //     password: [
      //       '',
      //       [
      //         Validators.required,
      //         Validators.minLength(6),
      //         Validators.maxLength(40)
      //       ]
      //     ]
      //   }  
      // );
    }
    

    // get f(): { [key: string]: AbstractControl } {
    //   return this.form.controls;
    // }

    loginObj:UserDao=new UserDao();
  
    onSubmit(): void {
      // this.submitted = true;
  
      // if (this.form.invalid) {
      //   return;
      // }
  
      // console.log(JSON.stringify(this.form.value, null, 2));
      console.log("FORMDATA",this.form.value);
      this.loginObj.username=this.form.value.email;
      this.loginObj.password=this.form.value.password;
      this.loginService.loginUser(this.loginObj).subscribe(data=>{
        console.log("validated",data);
        this.form.reset();
        localStorage.setItem("loginEmail",this.loginObj.username);
        this.router.navigate(["/navbar/recommendation-service"]);
      },(
        error=>{console.log(error);
           this.errorMessage=error.error;

        }
        )
        )
        
       } 
  
  }
