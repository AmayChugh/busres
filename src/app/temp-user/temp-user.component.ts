import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-temp-user',
  templateUrl: './temp-user.component.html',
  styleUrls: ['./temp-user.component.css']
})
export class TempUserComponent implements OnInit {
  tempUserForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tempUserForm= this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', [Validators.required,Validators.email]],
      userMobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true
    if(this.tempUserForm.invalid){
      return
    }
    this.userService.tempregister(this.tempUserForm.value).subscribe(res=>{
      if (res != null){
        console.log(res)
        alert('Registration Successfull');
        this.tempUserForm.reset();
        this.router.navigateByUrl('login');
      }
      else{
        //console.log(res);
        alert('Enter Correct Credentials');
        this.tempUserForm.reset();
      }
    });
  }

}
