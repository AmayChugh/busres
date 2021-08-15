import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  // confirmForm: FormGroup
  id: number;
  buses: any;
  tickets: any;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = +(localStorage.getItem('id') || 0); 
    this.buses = this.userService.busSelected
    console.log("Amoi")
    // this.confirmForm = new FormGroup({
    //   userSource : this.buses.userSource, 
    //   userDestination : this.buses.userDestination, 
    //   doj : this.buses.doj,    
    //   ticketId : this.buses.ticketId,
    //   busPlate : this.buses.busPlate,
    //   seatno : this.buses.seatno
    //   });
    console.log(this.userService.isUserLoggedIn)
    if(this.userService.isUserLoggedIn == true){
      this.getDetails()
    }
    else{
      this.getTempDetails()
    }
    // this.getDetails()
    console.log(this.buses)

    

    // this.confirmForm= this.formBuilder.group({
    //   userSource: ['', Validators.required],
    //   userDestination: ['', Validators.required],
    //   startTime: ['', Validators.required],
    //   ticketId: ['', Validators.required],
    //   busPlate: ['', Validators.required],
    //   seatno: ['', Validators.required],

    // }
    // );
    
  }
  getDetails(){
    this.userService.showTicket().subscribe(res => {
      console.log(res);
      // console.log(this.buses)
      this.tickets = res;
      console.log(this.buses)
      // this.confirmForm.setValue({userSource: this.buses.userSource, 
      //   userDestination: this.buses.userDestination, 
      //   startTime: this.buses.startTime,    
      //   ticketId: this.buses.ticketId,
      //   busPlate: this.buses.busPlate,
      //   seatno: this.buses.seatno
      //   })
    });
  }
  getTempDetails(){
    this.userService.showTempTicket(this.buses).subscribe(res => {
      this.tickets = res;
      // console.log(this.buses)
  });
}
  onSubmit(){
    if (this.userService.isUserLoggedIn == true){
    this.buses.permBookingid = this.tickets.ticketId
    this.buses.dateOfjourney = this.tickets.doj
    console.log(this.buses)
    // console.log(this.confirmForm.value)
    this.userService.bookTicket(this.buses).subscribe(res=>{
      console.log(res)
      },err=>{
          alert("login error")
        });  
    this.router.navigateByUrl('/home')
  }else{
    this.buses.tempBookingid = this.tickets.ticketId
    this.buses.dateOfjourney = this.tickets.doj
    this.userService.bookTempTicket(this.buses).subscribe(res=>{
      console.log(res)
      },err=>{
          alert("login error")
        });  
    this.router.navigateByUrl('/home')
  }

}

}
