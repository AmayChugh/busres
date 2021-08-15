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
  buses: any;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buses = this.userService.busSelected
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
    console.log(this.tempUserForm.value)
    this.buses.tempEmail = this.tempUserForm.value.userEmail
    console.log(this.buses)
    this.userService.tempregister(this.tempUserForm.value).subscribe(res=>{
      if (res != null){
        console.log(res)
        alert('Registration Successfull');
        this.userService.addTempBooking(this.buses).subscribe(res =>{
          console.log(res)
        } )
        this.router.navigateByUrl('ticket');
      }
      else{
        //console.log(res);
        alert('Enter Correct Credentials');
        this.tempUserForm.reset();
      }
    });
  }

}
