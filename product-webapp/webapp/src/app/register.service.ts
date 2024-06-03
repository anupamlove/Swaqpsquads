import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    //  baseUrl="http://localhost:8080"
    baseUrl="https://swapsquad.stackroute.io"

  constructor(private httpClient: HttpClient) { }


  registerUser(user: UserRegistration): Observable<Object> {
     console.log(user);
     return this.httpClient.post(this.baseUrl+"/userservice/users/user",user);
  }
}