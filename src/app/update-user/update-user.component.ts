import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userr: any = [];
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  user(updateUser: NgForm) {
    this.userService.updateUser(updateUser.value).subscribe(res => {
      this.userr = res;
      if (res.message === 'Success') {
        console.log(res);
        alert('User Updated Successfully');
        updateUser.reset();
      } else {
        console.log(res);
        alert('Failed To Update User');
        updateUser.reset();
      }
    }
    );

  }
}
