import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  seatno: any;



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
      for(this.index = 0; this.index <this.seatsAvail.length; this.index++){
        var btn = document.getElementById(this.seatsAvail[this.index]) as HTMLInputElement
        console.log(btn)
        console.log(this.seatsAvail[this.index])
        if(btn.innerText == this.seatsAvail[this.index]) {
          btn.disabled = true
        }
        else{
          btn.disabled = false
        }
        console.log(btn)
      }
      
      // this.buses = res;
    });
  }
  onSubmit(val: number){
    if(this.userService.isUserLoggedIn === true){
      this.buses.seatno = val
      console.log(this.buses)
      this.buses.userSource = localStorage.getItem('userSource')
      this.buses.userDestination = localStorage.getItem('userDestination')
      console.log(this.buses)
      this.buses.numberOfseats = 1
      console.log(this.buses)
      console.log(val)
      this.userService.confirmSeat(this.buses).subscribe(res=>{
      console.log(res)
      },err=>{
          alert("login error")
        });
      this.router.navigateByUrl('/login')
    }
    else{
      this.router.navigateByUrl('/userDetails')
    }

    // console.log(val)
    //   this.userService.confirmSeat(this.buses).subscribe(res=>{
    //   console.log(res)
    // });
    // console.log(this.buses)
    // this.userService.register(this.selectSeatForm.value).subscribe(res=>{
      
    // },err=>{
    //   alert("login error")
    // });
  }
  
}
