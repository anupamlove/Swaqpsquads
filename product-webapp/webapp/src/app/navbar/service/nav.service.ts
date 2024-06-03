import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavService {

    // private url: string ="http://localhost:8080"
   private url="https://swapsquad.stackroute.io"

  constructor(private httpClient: HttpClient) { }
  getuserdetails(email:string): Observable<Object> {
    return this.httpClient.get(this.url+"/userservice/users/user/"+email);
 }
}
