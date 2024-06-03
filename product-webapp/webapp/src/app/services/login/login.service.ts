import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from 'src/app/models/login/jwt-request';
import { UserDao } from 'src/app/models/login/user-dao';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // baseUrl="http://localhost:8080"
  baseUrl="https://swapsquad.stackroute.io"

  constructor(private httpClient:HttpClient) { }
  loginUser(user: UserDao): Observable<Object> {
    console.log("user",user);
    return this.httpClient.post(this.baseUrl+"/authenticationservice/validate",user);
 }
 validate(user){
  return this.httpClient.get(this.baseUrl+"/authenticationservice/validate",user)
}
}
