import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
   //  private url: string ="http://localhost:8080"
     private url="https://swapsquad.stackroute.io"
  
  constructor(private httpClient: HttpClient) { }
  getproduct(email:string): Observable<Object> {
    return this.httpClient.get(this.url+"/productservice/api/v1/producte/"+email);
 }

}
