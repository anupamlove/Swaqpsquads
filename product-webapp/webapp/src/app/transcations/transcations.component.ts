import { Component, OnInit } from '@angular/core';
import {Abc} from "./model/abc";
import {HttpClient} from '@angular/common/http';
import {TranServiceService} from "./service/tran-service.service"
import { DomSanitizer } from '@angular/platform-browser';
import { Transcation } from './model/transcation';
import { Pdetail } from './model/pdetail';
import { Product } from '../component/productdetails/product';
import { Userrating } from './model/userrating';
import { StarRatingComponent } from 'ng-starrating/components/star-rating/star-rating.component';
import Swal from 'sweetalert2';

interface transcation {
  value: string;
}

 


@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css']
})

export class TranscationsComponent implements OnInit {
  selectedValue: string= "Sold Products";
  public stars: boolean[] = [false,false,false,false,false]

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }

  transcations: transcation[] = [
    {value: 'Sold Products'},
    {value: 'Purchased Products'},
    
  ];
  
  transcat:Pdetail[] = [] ;
  bvc:Pdetail
  abc:Product
  userrat:Userrating[];
  a:Userrating=null

  usersemail=""
  
  selectCar(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    console.log(this.selectedValue)

    if(this.selectedValue=='Purchased Products'){
      this.tran=null
      this.transcationService.getTranscationsByByerEmailId(this.useremail).subscribe((data:any)=>{
        console.log("data",data);
        // for (let i = 0; i < data.length; i++) {
        // this.abc.push(data[i]);
        // }
        // console.log(this.abc);
        this.tran=data
        console.log("tran",this.tran);
        
        
        for (let i = 0; i < this.tran.length; i++) {
          this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data:any)=>{
            console.log("product",data);
            this.abc=data
            // for (let i = 0; i < data.length; i++) {
            // this.abc.push(data[i]);
            // }
            // console.log(this.abc);
            
          
            this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
    
              "data:img/" + "jpg" + ";base64," + data.image
        
            );
            this.tran[i].pcoin1=this.tran[i].price_of_Product_in_coins
            this.tran[i].pname2=this.abc.pname
            this.tran[i].pcategory2=this.abc.pcategory
            this.tran[i].eemail=this.tran[i].sellerEmail
            this.tran[i].image2=this.tran[i].image
            console.log("product",this.tran);
          });
          this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data:any)=>{
            console.log("product",data);
            this.abc=data
            // for (let i = 0; i < data.length; i++) {
            // this.abc.push(data[i]);
            // }
            // console.log(this.abc);
            
          
            this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
    
              "data:img/" + "jpg" + ";base64," + data.image
        
            );
            this.tran[i].pname1=this.abc.pname
            this.tran[i].pcategory1=this.abc.pcategory
            this.tran[i].image1=this.tran[i].image
            console.log("product",this.tran);
          });
        }
      });
    }else{
      this.tran=null
      this.transcationService.getTranscationsBySellerEmailId(this.useremail).subscribe((data:any)=>{
        console.log("data",data);
        
        // for (let i = 0; i < data.length; i++) {
        // this.abc.push(data[i]);
        // }
        // console.log(this.abc);
        this.tran=data
        console.log("tran",this.tran);
        
        for (let i = 0; i < this.tran.length; i++) {
          this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data:any)=>{
            console.log("product",data);
            this.abc=data
            // for (let i = 0; i < data.length; i++) {
            // this.abc.push(data[i]);
            // }
            // console.log(this.abc);
            
          
            this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
    
              "data:img/" + "jpg" + ";base64," + data.image
        
            );
            this.tran[i].pcoin2=this.tran[i].price_of_Product_in_coins
            this.tran[i].pname1=this.abc.pname
            this.tran[i].pcategory2=this.abc.pcategory
            this.tran[i].eemail=this.tran[i].buyerEmail
            this.tran[i].image1=this.tran[i].image
            console.log("product",this.tran);
          });
          this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data:any)=>{
            console.log("product",data);
            this.abc=data
            // for (let i = 0; i < data.length; i++) {
            // this.abc.push(data[i]);
            // }
            // console.log(this.abc);
            
          
            this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
    
              "data:img/" + "jpg" + ";base64," + data.image
        
            );
            this.tran[i].pname2=this.abc.pname
            this.tran[i].pcategory1=this.abc.pcategory
            this.tran[i].eemail=this.tran[i].buyerEmail
            this.tran[i].image2=this.tran[i].image
            console.log("product",this.tran);
          });
        }
      });
      
    }
    
    
  }

  title = 'abc';
  car:any="Car";
  name="anupam";
  email="abc@gmail.com"
  empList: Array<Abc> = [];
  constructor(private httpClient:HttpClient,private transcationService: TranServiceService ,private domSanitizer:DomSanitizer) {
    
      
    }

   

  // ngOnInit(): void {
  //   let abc = new Abc();
  //   abc.a="vijay"
  //   abc.b="vijay@gmail.com"
  //   this.empList.push(abc);
  //   let absc = new Abc();
  //   absc.a="vijay"
  //   absc.b="vijay@gmail.com"
  //   this.empList.push(absc);
  //   let abwc = new Abc();
  //   abwc.a="vijay"
  //   abwc.b="vijay@gmail.com"
  //   this.empList.push(abwc);
  // }
  tran:Transcation[];
  currentRate = 8;
  rating = 1
  reviews=""
  rateings:Userrating = new Userrating();
  useremail:any;
  onClickSubmit(data,email){
    this.toDisplay = !this.toDisplay;
     console.log(this.rating,data.review,email);
     this.rateings.userId = this.useremail
     this.rateings.reviews= data.review
     this.rateings.rating=this.rating
     console.log(this.rateings);
     this.transcationService.ratebyemail(this.rateings,email).subscribe(data=>{
      
      Swal.fire('Successfully done ');
    },error=> Swal.fire({icon: 'error',title: 'Oops...',text: 'Error', }));
     
  }
  toDisplay = false;
  
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.rating = $event.newValue 
    console.log(this.rating)
  }
  
  
  ngOnInit(): void {

    this.useremail=localStorage.getItem('loginEmail')
    this.transcationService.getTranscationsBySellerEmailId(this.useremail).subscribe((data:any)=>{
      console.log("data",data);
      // for (let i = 0; i < data.length; i++) {
      // this.abc.push(data[i]);
      // }
      // console.log(this.abc);
      this.tran=data
      console.log("tran",this.tran);
      
      for (let i = 0; i < this.tran.length; i++) {
        this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data:any)=>{
          console.log("product",data);
          this.abc=data
          // for (let i = 0; i < data.length; i++) {
          // this.abc.push(data[i]);
          // }
          // console.log(this.abc);
          
        
          this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
  
            "data:img/" + "jpg" + ";base64," + data.image
      
          );
          this.tran[i].pcoin2=this.tran[i].price_of_Product_in_coins
          this.tran[i].pname1=this.abc.pname
          this.tran[i].pcategory2=this.abc.pcategory
          this.tran[i].eemail=this.tran[i].buyerEmail
          this.tran[i].image1=this.tran[i].image
          console.log("product",this.tran);
        });
        this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data:any)=>{
          console.log("product",data);
          this.abc=data
          // for (let i = 0; i < data.length; i++) {
          // this.abc.push(data[i]);
          // }
          // console.log(this.abc);
          
        
          this.tran[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
  
            "data:img/" + "jpg" + ";base64," + data.image
      
          );
          this.tran[i].pname2=this.abc.pname
          this.tran[i].pcategory1=this.abc.pcategory
          this.tran[i].eemail=this.tran[i].buyerEmail
          this.tran[i].image2=this.tran[i].image
          console.log("product",this.tran);
        });
      }
    });
    


}
}