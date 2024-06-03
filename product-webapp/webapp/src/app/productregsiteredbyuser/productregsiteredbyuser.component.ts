import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-productregsiteredbyuser',
  templateUrl: './productregsiteredbyuser.component.html',
  styleUrls: ['./productregsiteredbyuser.component.css']
})
export class ProductregsiteredbyuserComponent implements OnInit {

  constructor(private httpClient:HttpClient,private navservice:ProductService,private domSanitizer:DomSanitizer,private router: Router ) { }
  pro:Product[] = []

  productdetails(productId:any){
  
    console.log(productId)
    
     localStorage.setItem("productId",productId);
     this.router.navigate(["/navbar/productDetail"]);
    
    
     }
  ngOnInit(): void {
    this.navservice.getproduct(localStorage.getItem('loginEmail')).subscribe((data:any)=>{
      this.pro = data
      
      for(let i = 0; i < this.pro.length; i++){
        this.pro[i].image=this.domSanitizer.bypassSecurityTrustResourceUrl(
  
          "data:img/" + "jpg" + ";base64," + data[i].image
    
        );
      }

      
      });
  }

}
