import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  viewTicket: FormGroup
  ticket: any;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder, private http: HttpClient) {
    
   }

  ngOnInit(): void {
    this.viewTicket = this.formBuilder.group({
      ticketId: ['', Validators.required]
  });
}
onSubmit(): void {
  console.log(this.viewTicket.value)
  this.http.get<any>(`http://localhost:8090/busres/user/findTicket/${this.viewTicket.value.ticketId}`).subscribe(res => {
    console.log(res)
    this.ticket = res
});

}
}