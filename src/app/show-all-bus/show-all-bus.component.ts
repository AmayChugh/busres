import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-all-bus',
  templateUrl: './show-all-bus.component.html',
  styleUrls: ['./show-all-bus.component.css']
})
export class ShowAllBusComponent implements OnInit {
  buses: any[] = [];
  constructor(private userService: UserService) {
    // this.getBuses();
   }

  ngOnInit(): void {
  }
  // getBuses() {
  //   this.userService.showAllBus().subscribe(res => {
  //     console.log(res);
  //     this.buses = res.busList;
  //   });
  }

