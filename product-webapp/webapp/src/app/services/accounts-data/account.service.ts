import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account-data/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   // private baseurl="http://localhost:8080"
    private baseurl="https://swapsquad.stackroute.io"
  // private baserurla="http://localhost:9998/users/addaccount"
 

  constructor(private httpClient: HttpClient) { }

  // public addAccount(accountObj:any){
   
  //   return this.httpClient.post<Account>(this.baseurl , accountObj);
  // }

  addAccount(user: Account): Observable<Object> {
    console.log(user);
    return this.httpClient.post(this.baseurl+"/userservice/users/addaccount",user);
 }

 getAccountByAccountNumber(accountNumber:any){
  return this.httpClient.get<Account>(this.baseurl +"/userservice/users/"+ accountNumber)

 }

 addAmount(email:any,amount:any){
  return this.httpClient.put(this.baseurl+"/userservice/users/addcoin?email=" + email +"&amount=" + amount, {} )
}

getAccountDataByEmail(email:any){
  return this.httpClient.get(this.baseurl +"/userservice/users/account/" + email)
}
 
}

