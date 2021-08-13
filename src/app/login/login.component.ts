import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Users: any = [];
  Userid: string= ''
  loginUserForm: FormGroup;
  submitted= false;
  buttonType: any;
  returnUrl: string;


  constructor(private router: Router, private http: HttpClient, private userService: UserService, private formBuilder: FormBuilder,private authService : AuthService ) { }

  ngOnInit() {
    this.loginUserForm = this.formBuilder.group({
      userEmail: ['', [Validators.required,Validators.email]],
      userPassword: ['', Validators.required],
    }
    );
    this.returnUrl = '/home';
    this.authService.logout();
  }
  
  onSubmit(buttonType: any): void {
    if(buttonType==='user') {
      console.log(buttonType)
      this.http.post<any>('http://localhost:8090/busres/user/login', this.loginUserForm.value).subscribe(res => {
      alert("Hello")
      console.log(res);
      console.log("mai hoon yaha")
      this.Users = res
      this.Userid = res.value0;
      console.log(this.Userid);
      // console.log(this.Users.id)
      if (res.value1 === true) {
        window.confirm('login successfull');
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('id',this.Userid);
        this.userService.isUserLoggedIn = true;
        console.log(localStorage.getItem('id'));
        this.router.navigateByUrl('/home');
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
        this.router.navigateByUrl('/home');
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

