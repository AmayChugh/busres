import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-all-bus',
  templateUrl: './show-all-bus.component.html',
  styleUrls: ['./show-all-bus.component.css']
})
export class ShowAllBusComponent implements OnInit {
  Allbuses: any;
  buses: any;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    // this.getBuses();
   }

  ngOnInit(): void {
    this.getAllBuses()
  }
  getAllBuses() {
    this.userService.showAllBuses().subscribe(res => {
      console.log(res);
      this.Allbuses = res;
      console.log(this.Allbuses)
    });
  }
  deleteBus(bus: any){
    this.buses = bus
    this.userService.deleteBus(this.buses).subscribe(res=>{
      console.log(res)
    });
    console.log(bus);
    console.log(this.buses)
    console.log("hello"+this.buses)
    this.router.navigate(['/home'])
    // //console.log(this.userService.busSelected)
  }

}