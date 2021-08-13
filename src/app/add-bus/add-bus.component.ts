import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  addBusForm: FormGroup;
  sourceLocation: string[] = ['Thane', 'Gwalior', 'Pune'];
  noOfHalts: any[] = [3,4,5,6]
  Halt: string[] =['Mumbai','Thane','Nashik','Pune','Latur','Gwalior','Lucknow','Banglore','Chennai'] 
  defaultSource: string = 'Mumbai';
  defaultDest: string = 'Choose Destination Location';
  defaultHalt: number = 0;
  defaultHaltLocation: any = 'Choose Halt'
  submitted: boolean = false;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.addBusForm= this.formBuilder.group({
    busId: ['', Validators.required],
    busPlate: ['', Validators.required],
    seatType: ['', Validators.required],
    aC: ['', Validators.required],
    sourceLocation: ['', Validators.required],
    destinationLocation: ['', Validators.required],
    startTime: ['', Validators.required],
    duration: ['', Validators.required],
    seatFactorFare: ['', Validators.required],
    acFactorFare: ['', Validators.required],
    noOfHalts: ['', Validators.required],
    halts: this.formBuilder.array([]) 
  }),
  this.addBusForm.controls['sourceLocation'].setValue(this.defaultSource, {onlySelf: true});
  this.addBusForm.controls['destinationLocation'].setValue(this.defaultDest, {onlySelf: true});
  }

  newHalt(): FormGroup {
    return this.formBuilder.group({
      halt2: '',
      haltno: ''
    })
  }
  Halts() : FormArray {
    return this.addBusForm.get("halts") as FormArray
  }
  addHalt() {
    this.Halts().push(this.newHalt());
  }
  removeHalt(i:number) {
    this.Halts().removeAt(i);
  }
  onSubmit() {
    this.submitted = true
    console.log(this.submitted)
    if(this.addBusForm.invalid){
      return
    }
    this.userService.addBus(this.addBusForm.value).subscribe(res=>{
      console.log("res")
      if (res != null){
        console.log(res)
        alert('Registration Successfull');
        // this.addBusForm.reset();
        this.router.navigateByUrl('login');
      }
      else{
        //console.log(res);
        alert('Enter Correct Credentials');
        this.addBusForm.reset();
      }
    });
  }
}


