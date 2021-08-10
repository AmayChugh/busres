import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Users= [];
  loginUserForm: FormGroup;
  submitted= false;
  buttonType: any;


  constructor(private router: Router, private http: HttpClient, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginUserForm = this.formBuilder.group({
      userEmail: ['', [Validators.required,Validators.email]],
      userPassword: ['', Validators.required],
    }
    );
  }
  
  onSubmit(buttonType: any): void {
    if(buttonType==='user') {
      console.log(buttonType)
      this.http.post<any>('http://localhost:8090/busres/user/login', this.loginUserForm.value).subscribe(res => {
      alert("Hello")
      console.log(res);
      console.log("mai hoon yaha")
      this.Users = res.value;
      if (res.value1 === true) {
        window.confirm('login successfull');
        this.userService.isUserLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        window.confirm('ENTER CORRECT CREDENTAILS');
        this.loginUserForm.reset();
      }
    },err=>{
      alert("login error")
    });
  }
  if(buttonType==='admin'){
      console.log(buttonType)
      this.http.post<any>('http://localhost:8090/busres/admin/login', this.loginUserForm.value).subscribe(res => {
      alert("Hello")
      console.log(res);
      this.Users = res;
      if (res=== true) {
        window.confirm('login successfull');
        this.userService.isAdminLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        window.confirm('ENTER CORRECT CREDENTAILS');
        this.loginUserForm.reset();
      }
    },err=>{
      alert("login error")
    });
  }
    this.submitted = true
    if(this.loginUserForm.invalid){
      return
    }
    
  }
}

