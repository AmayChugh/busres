import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
searchForm: FormGroup;
submitted: boolean = false;
  id: number;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = +(localStorage.getItem('id') || 0); 
    console.log(this.id)
    console.log(typeof this.id)
    this.searchForm = this.formBuilder.group({
      sourceLocation : ['', Validators.required],
      destinationLocation : ['', Validators.required],
      startTime: ['', Validators.required],
      duration: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true
    if(this.searchForm.invalid){
      return
    }
    this.userService.searchBus(this.searchForm.value).subscribe(res=>{
      if(res === true){
        window.confirm("Searching...........")
        this.router.navigateByUrl('/bookBus');

      }else {
        window.confirm('ENTER All FIELDS');
        this.searchForm.reset();
      }
    },err=>{
      alert("login error")
    });
  }
}
