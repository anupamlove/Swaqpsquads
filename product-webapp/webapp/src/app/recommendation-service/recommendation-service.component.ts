import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap,filter} from 'rxjs/operators';
import { IncomingProductData } from '../models/recommendation/incoming-product-data';
import { RecommedationService } from '../services/recommendation-service/recommedation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


interface State {
  value: string;
  viewValue: string;
}
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {
  [x: string]: any;

value:any;
recommendationForm:FormGroup;
title = 'Ip-geolocation';
userIP:'';
searchKey:string="";
public searchTerm : string='';
  
  productId:number;
  productOwnerEmail:any;
  productName:any;
  state:any;
  city:any;
  productCategory:any;
  productImage:any; 


  public IncomingProductData:any;
  public category:any;
  public location:any;
  public abc:Array<IncomingProductData>=[];
  public getproduct:any[]=[];
  

  constructor(private httpClient:HttpClient,private _recommendationService: RecommedationService ,private domSanitizer:DomSanitizer,private router: Router) {
    this.recommendationForm = new FormGroup({
      state: new FormControl(),
      category: new FormControl(),
          });
   }
  
   
   states: State[] = [
    {value: '', viewValue: ''},
    {value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh'},
    {value: 'Assam', viewValue: 'Assam'},
    {value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh'},
    {value: 'Bihar', viewValue: 'Bihar'},
    {value: 'Chhattisgarh', viewValue: 'Chhattisgarh'},
    {value: 'Goa', viewValue: 'Goa'},
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Haryana', viewValue: 'Haryana'},
    {value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh'},
    {value: 'Jharkhand', viewValue: 'Jharkhand'},
    {value: 'Karnataka', viewValue: 'Karnataka'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh'},
    {value: 'Maharashtra', viewValue: 'Maharashtra'},
    {value: 'Manipur', viewValue: 'Manipur'},
    {value: 'Meghalaya', viewValue: 'Meghalaya'},
    {value: 'Nagaland', viewValue: 'Nagaland'},
    {value: 'Odisha', viewValue: 'Odisha'}
  ];
  
  selectedState = this.states[0].value;

  selectState(event: Event) {
    this.selectedState = (event.target as HTMLSelectElement).value;
   if(!this.selectedCategory){
    return this._recommendationService.getProductRecommendationsByLocation(this.selectedState).subscribe(data=>{
      this.abc=data;
      console.log(this.abc);
      this.abc.map(image=>{
        console.log(image);
        image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
          "data:productImage/" + "jpg" + ";base64," +image.productImage
        );
      })

      

     })
   }
   else{
    this._recommendationService.getgetProductRecommendationByStateAndCategory(this.selectedState,this.selectedCategory).subscribe(data=>{
        this.abc=data;
        console.log(this.abc);
        this.abc.map(image=>{
          console.log(image);
          image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
            "data:productImage/" + "jpg" + ";base64," +image.productImage
          );
        })
       })
   }
  

 

  }
  categories: Category[]=[
    {value: '', viewValue: ''},
    {value: 'Mobiles', viewValue: 'Mobiles'},
    {value: 'Automobiles', viewValue: 'Automobiles'},
    {value: 'Electronics', viewValue: 'Electronics'},
    {value: 'Fashion', viewValue: 'Fashion'},
    {value: 'Appliances', viewValue: 'Appliances'},
    {value: 'Furnitures', viewValue: 'Furnitures'}
  ];
   selectedCategory = this.categories[0].value;
   selectCategory(event:Event) {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    console.log(this.selectedState);
    if(!this.selectedState){
      return this._recommendationService.getgetProductByCategory(this.selectedCategory).subscribe(data=>{
        this.abc=data;
        console.log(this.abc);
        this.abc.map(image=>{
          console.log(image);
          image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
            "data:productImage/" + "jpg" + ";base64," +image.productImage
          );
        })
       })
     }
     else{
      this._recommendationService.getgetProductRecommendationByStateAndCategory(this.selectedState,this.selectedCategory).subscribe(data=>{
          this.abc=data;
          console.log(this.abc);
          this.abc.map(image=>{
            console.log(image);
            image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
              "data:productImage/" + "jpg" + ";base64," +image.productImage
            );
          })
         })
     }
   } 
  
  ngOnInit(): void {
   
    this._recommendationService.getAllProduct().subscribe((data:any)=>{
      console.log("data",data);
      for (let i= data.length-1; i >= 0; i--) {
      this.abc.push(data[i]);
      }
      this.abc.map(image=>{
        console.log(image);
        image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
          "data:productImage/" + "jpg" + ";base64," +image.productImage
        );
      })
      console.log(this.abc);
    });
   
  }
      recommendObj: IncomingProductData = new IncomingProductData();
    onSelect(){
      console.log(this.recommendationForm.value)
        this.recommendObj.city = this.recommendationForm.value.city;
      this.recommendObj.productCategory = this.recommendationForm.value.productCategory;
      this.recommendObj.state = this.recommendationForm.value.state;
             }
   // for Search bar
   search(event:any){
     this.searchTerm = (event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
   }


  
   

  


  

 loadUserInfo(){
   
   this.httpClient.get('https://jsonip.com/')
   .pipe(
     switchMap((value:any)=>{
      this.userIP =value.ip;




      let url ='http://api.ipstack.com/${value.ip}?access_key=3def43850ecd7df03e512b3e1164df75';

       return this.httpClient.get('url');
     })
   )
   .subscribe(
     (response:any) =>{
       console.log(response)
     }, 
     (error)=>{
       console.log(error)
     }
   )
 }
  
  
 recommendation(productId:any){
  
console.log(productId)

 localStorage.setItem("productId",productId);
 this.router.navigate(["/navbar/productDetail"]);


 }
  
  
}
