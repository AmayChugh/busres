import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Bus } from './bus';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = false;
  isAdminLoggedIn = false;
  baseUrl = 'http://localhost:8090/busres/user'
  adminUrl = 'http://localhost:8090/busres/admin'
  // ownerUrl = 'http://localhost:3000/register/owner'
  // allownersUrl = 'http://localhost:3000/getAllOwner'
  busSelected: any;
  permUserid = localStorage.getItem('id')
  constructor(private http: HttpClient) { 
    // this.selectedBus$ =this.selectedBusSubject.asObservable();
  }

  isUserLogin(){
    if(this.isUserLoggedIn){
      return true;
    }else{
      return false;
    }
  }
  isAdminLogin(){
    if(this.isAdminLoggedIn){
      return true;
    }else{
      return false;
    }
  }

  register(res: User){
    alert(console.log(res))
      return this.http.post<any>(`${this.baseUrl}/add`, res);
  }
  addBus(res: Bus) {
    alert(console.log(res))
    return this.http.post(`${this.adminUrl}/addBus`, res);
  }
  searchBus(res :any){
    alert(console.log(res))
    return this.http.post(`${this.adminUrl}/searchBus`, res) 
  }
  selectBus(bus: any){
    alert("Service Called")
    this.busSelected = bus
  }
  showBus(){
    return this.http.get<any>(`${this.adminUrl}/showBus`);
  }
  checkSeats(){
    return this.http.get<any>(`${this.adminUrl}/checkSeats/${this.busSelected.busId}`);
  }
  confirmSeat(buses : any){
    this.busSelected = buses
    return this.http.post<any>(`${this.adminUrl}/bookSeat/${this.busSelected.busId}`,buses);
  }
  addBooking(buses: any){
    alert("calling")
    return this.http.post(`${this.adminUrl}/addBooking/${this.busSelected.busId}/${this.permUserid}`,buses);
  }
  addTempBooking(buses: any){
    alert("i am here")
    return this.http.post(`${this.baseUrl}/addTempBooking/${this.busSelected.busId}`,buses);
  }
  updateUser(res: any){
      return this.http.put<any>(`${this.baseUrl}/update`, res);
  }
  tempregister(res: any){
    return this.http.post<any>(`${this.baseUrl}/addTempUser`,res)
  }
  showTicket(){
    return this.http.get<any>(`${this.baseUrl}/confirmDetails`);
  }
  bookTicket(buses : any){
    return this.http.post<any>(`${this.adminUrl}/confirmPermbooking/${this.busSelected.busId}/${this.permUserid}`,buses)
  }
  bookTempTicket(buses: any){
    return this.http.post<any>(`${this.baseUrl}/confirmTempBooking/${this.busSelected.busId}`,buses)
  }
  showTempTicket(buses:any){
    alert("mai second")
    return this.http.get<any>(`${this.baseUrl}/confirmDetailsforTemp/${buses.tempEmail}`);
  }
  showAllBuses(){
    return this.http.get<any>(`${this.adminUrl}/findAllBus`)
  }
  deleteBus(buses: any){
    return this.http.delete<any>(`${this.adminUrl}/deleteBusbyId/${buses.busId}`)
  }
}

