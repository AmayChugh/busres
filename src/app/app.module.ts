import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth.guard'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ShowAllBusComponent } from './show-all-bus/show-all-bus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookBusComponent } from './book-bus/book-bus.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { TempUserComponent } from './temp-user/temp-user.component';
import { TicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    AddBusComponent,
    ShowAllBusComponent,
    HeaderComponent,
    FooterComponent,
    BookBusComponent,
    UpdateUserComponent,
    SelectSeatComponent,
    TempUserComponent,
    TicketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
