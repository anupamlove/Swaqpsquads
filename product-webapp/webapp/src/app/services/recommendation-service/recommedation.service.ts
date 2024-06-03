import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/recommendation/category';
import { IncomingProductData } from 'src/app/models/recommendation/incoming-product-data';

@Injectable({
  providedIn: 'root'
})
export class RecommedationService {

 
  

 // private url: string ="http://localhost:8080"
   private url= "https://swapsquad.stackroute.io"

  constructor(private httpClient: HttpClient) { }
//   IncomingProductData(city:Location,category:Category): Observable<Object> {
//     console.log(city,category);
//     return this.httpClient.post(`${this.url}`,"city" + "category");
//  }

  getProductRecommendationsByLocation(state:String){
   return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommendationservice/recommend/" +  state)
  }
  getgetProductRecommendationByStateAndCategory(state:String,category:String){
    return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommendationservice/recommendCategory" + '?state='+state+'&category='+category)
   }
   getgetProductByCategory(category:String){
    return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommendationservice/Product" + '?category=' + category )
   }
   getAllProduct(){
    return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommendationservice/getAllProduct")
   }
   deleteproductbyId(productId:any){
    return this.httpClient.delete<IncomingProductData[]>(this.url+ "/recommendationservice/delete/" + productId)
   }
}

