import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-bus',
  templateUrl: './book-bus.component.html',
  styleUrls: ['./book-bus.component.css']
})
export class BookBusComponent implements OnInit {
  buses: any[] = [];
  id: number;
  constructor(private router: Router,private userService: UserService) {
    
    
  }

  ngOnInit(): void {
    //this.userService.busSelected = this.buses
    this.id = +(localStorage.getItem('id') || 0);
    this.getBuses()
  }
  getBuses() {
    this.userService.showBus().subscribe(res => {
      console.log(res);

      this.buses = res;
    });
  }
  bookBus(bus: any){
    // 
    this.buses = bus
    this.userService.selectBus(this.buses)
    console.log(bus);
    console.log(this.buses)
    console.log("hello"+this.buses)
    this.router.navigate(['/selectSeat'])
    // //console.log(this.userService.busSelected)
  }
}
