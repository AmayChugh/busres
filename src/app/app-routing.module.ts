import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BookBusComponent } from './book-bus/book-bus.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { ShowAllBusComponent } from './show-all-bus/show-all-bus.component';
import { TempUserComponent } from './temp-user/temp-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent,canActivate : [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addBus', component: AddBusComponent},
  {path: 'bookBus', component: BookBusComponent},
  {path: 'showAllBuses', component: ShowAllBusComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'selectSeat', component: SelectSeatComponent},
  {path: 'userDetails', component: TempUserComponent}
  //{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
