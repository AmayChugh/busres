import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //userService: any;

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }
  // get isUserLoggedIn() {
  //   return this.userService.isUserLogin();
  // }
  // get getavalia() {
  //   return this.userService.avail;
  //  }
  // logout(){
  //   this.userService.isUserLoggedIn = false;
  //   this.router.navigateByUrl('/');
  // }

}
