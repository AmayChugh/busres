import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {
  id: number;
  buses: any
  clicked = false;
  selectSeatForm: FormGroup;
  val: any
  seatsAvail: any
  seats: any
  index: number


  constructor(private router: Router, private userService: UserService,private formBuilder: FormBuilder, private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.id = +(localStorage.getItem('id') || 0); 
    this.buses = this.userService.busSelected
    this.buses.permUserid = this.id
    console.log(this.buses)
    this.availSeats()
    
  }
  availSeats(){
      this.http.get<any>(`http://localhost:8090/busres/admin/checkSeats/${this.buses.busId}`).subscribe((res: any) => {
      this.seatsAvail = res
      console.log(this.seatsAvail)
      // this.buses = res;
    });
  }
  onSubmit(val: any){
    window.alert(val)
    console.log(this.buses)
    console.log(typeof(this.seatsAvail))
    this.seats = Object.values(this.seatsAvail)
    console.log(this.seats)
    for(this.index = 0; this.index < this.seats.length; this.index++){
      if(this.seatsAvail[this.index] === val){
        console.log("eureka")
        this.buses.seatno = val
      }
      else{
        alert("This seat is already in booked")
      }
    }
    console.log(this.buses)
    // this.userService.register(this.selectSeatForm.value).subscribe(res=>{
      
    // },err=>{
    //   alert("login error")
    // });
  }
  
}
