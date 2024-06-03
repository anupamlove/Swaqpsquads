import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductDetailsService } from "./product-details.service";
import { DomSanitizer } from "@angular/platform-browser";
import { UserratingService } from "./userrating.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { PaymentComponent } from "../../payment/payment.component";
import { Payment2Component } from "../../payment2/payment2.component";
import { Payment3Component } from "../../payment3/payment3.component";
import { ChatService } from "src/app/services/chat/chat.service";
import { Chat } from "src/app/models/chat/chat";
import { error } from "protractor";
import { I } from "@angular/cdk/keycodes";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.css"],
})
export class ProductdetailsComponent implements OnInit {

  employees:  Product = new  Product();
  pemail = "";
  pname = "One Plus 9r";
  plocation = "Patna,Bihar";
  pstatus = "Available";
  pdate = "";
  pcoin = 20000;
  pdatepost = "";

  pexchangetype = "exchange";
  desc =
    " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
  pcategory = "";
  year: any;
  dateofpurchase: String;
  time: String;
  product: any;
  img: any;
  dateofposting: any;

  //user rating
  rate: any;
  review: any;
  userId: "";
  totalstar = "5";

  // img1="assets/1.jpg"

  public productdata: any;
  public userratingdata: any;
  pexchange: any;
  ratings: any;
  avgRating: any;
  pstate: any;
  pcity: any;


  constructor(
    private _productdetailsService: ProductDetailsService,
    private domSanitizer: DomSanitizer,
    private userratingservice: UserratingService,
    private router: Router,
    public dialog: MatDialog,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {

    this._productdetailsService.getProductDetailsById(localStorage.getItem("productId")).subscribe((data) => {

      this.productdata = data;
    
      this.pname = this.productdata.pname
      this.pemail = this.productdata.pemail
      this.pcategory = this.productdata.pcategory
      // this.plocation = this.productdata.plocation
      this.pstate = this.productdata.pstate
      this.pcity = this.productdata.pcity
      this.pdate = this.productdata.pdate
      this.pdatepost = this.productdata.pdatepost
      this.pcoin = this.productdata.pcoin
      this.pexchange = this.productdata.pexchange
      this.pexchangetype = this.productdata.pexchangetype
      this.desc = this.productdata.desc
      this.img = this.domSanitizer.bypassSecurityTrustResourceUrl(

        "data:img/" + "jpg" + ";base64," + this.productdata.image

      );
    



      this.ownerEmail = this.productdata.pemail;

      var t = this.pdatepost;
      this.dateofpurchase = t.substring(0, 10);

      var t2 = this.pdate;
      this.dateofposting = t2.substring(0, 10);
    })
    
    this._productdetailsService.getProductDetailsById(localStorage.getItem("productId")).subscribe((data) => {

      this.productdata = data;
 
    
    console.log(this.pemail)
    this.userratingservice.getUserRatingByEmail(this.pemail).subscribe(dataofrating => {
      this.userratingdata = dataofrating
      console.log(this.userratingdata)
      this.ratings = this.userratingdata.ratings
      this.avgRating = this.userratingdata.avgRating
    })

  })
  }

  //<============================ Payment Service Starts Here=========================>
 getExchangeDisable:Boolean=false;


  openDialog() {
    if(this.pemail==localStorage.getItem('loginEmail')){
      this.getExchangeDisable=true;

    }else{
      this.getExchangeDisable=false
    
    
    console.log(this.productdata.pexchangetype);
    if (this.productdata.pexchangetype == "COIN") {
      this.dialog.open(PaymentComponent);
    } else if (this.productdata.pexchangetype == "BARTER") {
      this.dialog.open(Payment2Component);
    } else 
    {
      this.dialog.open(Payment3Component);
    }
  }
  }
  //<============================ Chat Service Starts Here=========================>




  ownerEmail = "";
  buyerEmail = localStorage.getItem("loginEmail");
  public chatData: any;
  chatObj: Chat = new Chat();
  chatId = 0;
  chatNotFound = "";

  // For routing to the chat page when click on chat button
  goToChat() {
    // For string the buyerEmail or whose ever logged in, in localstorage
    localStorage.setItem("buyerEmail",this.buyerEmail);

    if (this.ownerEmail != this.buyerEmail) {
      // For checking the chat room by both the emails , if there is present then it will give the chat Id in localstorage
      this.chatService
        .getChatIdByBuyerAndSellerEmail(this.buyerEmail, this.ownerEmail)
        .subscribe(
          (data) => {
            // console.log(data);
            this.chatData = data;
            this.chatId = this.chatData[0].chatId;
            console.log(this.chatId);
            localStorage.setItem('chatId', this.chatData[0].chatId);
          },
          (error: any) => {
            console.log(error.error);
            this.chatNotFound = error.error;

            //  If the chat room is not already present then it will create new chat room and give the chatId in localstorage
            this.chatObj.buyerEmail = this.buyerEmail;
            this.chatObj.ownerEmail = this.ownerEmail;
            this.chatService.createChatRoom(this.chatObj).subscribe((data) => {
              console.log(data);
              this.chatData = data;
              this.chatId = this.chatData.chatId;
              localStorage.setItem('chatId', this.chatData.chatId);
            });
          }
        );
    }
    // define your component where you want to go
    this.router.navigate(["/navbar/chat"]);
  }

  //<============================ Chat Service Ends Here=========================>
}
function gmail(gmail: any) {
  throw new Error("Function not implemented.");
}