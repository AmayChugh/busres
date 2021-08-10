import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = false;
  isAdminLoggedIn = false;
  baseUrl = 'http://localhost:8090/busres/user'
  adminUrl = 'http://localhost:3000/login'
  ownerUrl = 'http://localhost:3000/register/owner'
  allownersUrl = 'http://localhost:3000/getAllOwner'
  constructor(private http: HttpClient) { }

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
    return this.http.post(`${this.baseUrl}/addBus`, res);
  }
  showAllBus() {
    return this.http.get<any>(`${this.ownerUrl}/getAllBus`);
  }
  setAvaliability(res: any) {
    console.log(res);
    return this.http.post(`${this.ownerUrl}/setAvaliability`, res);
  }
  getAllOwner() {
    return this.http.get<any>(this.allownersUrl);
  }
  removeOwner(res:any) {
    return this.http.delete(this.ownerUrl,res);
  }

}
