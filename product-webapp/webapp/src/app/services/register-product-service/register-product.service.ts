import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/register-product/Product';


@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

  // baseUrl="http://localhost:8083/product/api/v1/product/add";
     //   baseUrl="http://localhost:8080"
    baseUrl= "https://swapsquad.stackroute.io"
  
  constructor(private httpClient: HttpClient) { }


// public productService(product: Product){
//   return this.httpClient.post<Product>("baseUrl",product);
// }



public addProduct(productObject:any, productImage:File){
  const dataObj: FormData=new FormData;
  dataObj.append('str',JSON.stringify(productObject));
  dataObj.append('file',productImage);
  return this.httpClient.post<Product>( this.baseUrl+"/productservice/api/v1/product/add",dataObj);
}


}
