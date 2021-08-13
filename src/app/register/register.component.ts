import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'perm';
  addUserForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private userService: UserService,private formBuilder: FormBuilder) { }
  userList: User[];
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', [Validators.required,Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      confPassword: ['', Validators.required],
      userMobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dateOfBirth: ['', Validators.required],
      type: ['', Validators.required]
    },{
        validator: this.MustMatch('userPassword', 'confPassword')
    }
    );
    this.addUserForm.controls.type.setValue(this.name);
  }
  onSubmit() {
    this.submitted = true
    if(this.addUserForm.invalid){
      return
    }
    this.userService.register(this.addUserForm.value).subscribe(res=>{
      if (res != null){
        console.log(res)
        alert('Registration Successfull');
        this.addUserForm.reset();
        this.router.navigateByUrl('login');
      }
      else{
        //console.log(res);
        alert('Enter Correct Credentials');
        this.addUserForm.reset();
      }
    });
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
