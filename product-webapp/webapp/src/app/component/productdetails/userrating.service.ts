import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRating } from './user-rating';

@Injectable({
  providedIn: 'root'
})
export class UserratingService {

  // private baseurl: string = "http://localhost:8080"
  private baseurl="https://swapsquad.stackroute.io"


  email: any;

  constructor(private httpClient: HttpClient) { }

  //get method for obtainig user ratings and reviews
  getUserRatingByEmail(email:any){
    return this.httpClient.get<UserRating[]>(this.baseurl +"/userservice/users/user/" + email)
  }
}
