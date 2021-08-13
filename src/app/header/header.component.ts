import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  get isUserLogin(){
    return this.userService.isUserLogin();
  }
  get isAdminLogin() {
    return this.userService.isAdminLogin();
  }
  logout() {
    this.userService.isAdminLoggedIn = false;
    this.userService.isUserLoggedIn = false;
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('id');  
    this.router.navigateByUrl('/');

  }
}
