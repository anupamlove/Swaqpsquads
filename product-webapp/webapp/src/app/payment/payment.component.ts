import { Component, OnInit } from "@angular/core";
import { Product } from "../component/productdetails/product";
import { ProductDetailsService } from "../component/productdetails/product-details.service";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { UpdateDetailsService } from "../update-details.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { UserRegistration } from "../user-registration";
import { Transaction } from "../transaction";
import { TransactionService } from "../transaction.service";
import { EmailService } from "../email.service";
import { EmailDetails } from "../email-details";
import { AccountdataComponent } from "../component/accountdata/accountdata.component";
import { RecommedationService } from "../services/recommendation-service/recommedation.service";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  public abc: Array<Product> = [];
  updateForm: FormGroup;

  constructor(
    private _productdetailsService: ProductDetailsService,
    public dialogRef: MatDialogRef<PaymentComponent>,
    private userservice: UpdateDetailsService,
    private router: Router,
    private tranactionservice: TransactionService,
    private emailservice: EmailService,
    public dialog: MatDialog,
    private reccomservice: RecommedationService
  ) {
    this.updateForm = new FormGroup({
      pid: new FormControl(),
    });
  }
  public productdata1:any;
  public productdata: any;
  pid = 1001;
  pname = "One Plus 9r";
  desc =
    " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
  pcoin = 20000;
  pemail = "raju@gmail.com";
  pexchangetype = "exchange";
  public coindata: any;
  barterCoins = 5000;
  email: any;
  recipent: any;
  ngOnInit(): void {
    this._productdetailsService
      .getProductDetailsByEmail(localStorage.getItem("loginEmail"))
      .subscribe((data: any) => {
        console.log("data", data);
        for (let i = 0; i < data.length; i++) {
          this.abc.push(data[i]);
        }
        this.productdata1=data;
        this.pid=this.productdata1[0].pid;
        this.pemail=this.productdata1[0].pemail;
        console.log(this.productdata1[0].pid);
        console.log(this.productdata1[0].pemail);
        console.log(this.abc);
      });

    this._productdetailsService.getProductDetailsById(localStorage.getItem("productId")).subscribe((data) => {
      this.productdata = data;
      console.log(this.productdata);
      this.pname = this.productdata.pname;
      this.desc = this.productdata.desc;
      this.pcoin = this.productdata.pcoin;
      this.pid = this.productdata.pid;
      this.pemail = this.productdata.pemail;
      this.pexchangetype = this.productdata.pexchangetype
    });

    this.userservice
      .getUserCoinByEmail(localStorage.getItem("loginEmail"))
      .subscribe((data) => {
        this.coindata = data;
        console.log(this.coindata);
        this.barterCoins = this.coindata.barterCoins;
        this.email = this.coindata.email;
      });
  }

  onClose() {
    this.dialogRef.close();
  }
  onClickCoin(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus=false;
    dialogConfig.width= "70%"
    dialogConfig.height = "75%"
    this.dialog.open(AccountdataComponent,dialogConfig);
  }
  // addcoin() {
  //   this.router.navigate(["payment"]);
  // }

  productObj: Product = new Product();
  userObj: UserRegistration = new UserRegistration();
  transactionObj: Transaction = new Transaction();
  emailObj: EmailDetails = new EmailDetails();

  onClickSubmitForm() {if(this.coindata.barterCoins < this.productdata.pcoin){
    Swal.fire({
      icon: "error",
      title: "Insufficient Coin",
      text: "Please Add More Coin!",
    })
       
      }
      else{
        this._productdetailsService
        .updateProductNotAvailable(this.productdata.pid)
        .subscribe((data) => console.log(data));
    // this.productObj.pid = this.updateForm.value.pid;
    // console.log(this.updateForm.value.pid);
    // this._productdetailsService
    //   .updateProductNotAvailable(this.updateForm.value.pid)
    //   .subscribe((data) => console.log(data));
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Transaction  Unsuccessful!",
    //   })

    console.log(this.coindata.email);
    console.log(this.productdata.pemail);
    console.log(this.productdata.pcoin);
    this.userservice
      .exchange(
        this.coindata.email,
        this.productdata.pemail,
        this.productdata.pcoin
      )
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Requested for Exchange!!",
      text: "Thank You!",
    });

    this.transactionObj.buyerEmail = this.productdata1[0].pemail;
    this.transactionObj.sellerEmail = this.productdata.pemail;
    //  this.transactionObj.productSend =this.productdata1[0].pid;
    this.transactionObj.productObtained =  this.productdata.pid;
    this.transactionObj.method_of_Transaction =  this.productdata.pexchangetype;
    this.transactionObj.price_of_Product_in_coins = this.productdata.pcoin;
    this.tranactionservice
      .saveTransaction(this.transactionObj)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Tranaction Saved!!",
      text: "Thank You!",
    });


   
    this.reccomservice.deleteproductbyId(this.productdata.pid)
    .subscribe((data) => console.log(data));
  Swal.fire({
    icon: "success",
    title: "Product Deleted!!",
    text: "Thank You!",
  });


    this.emailObj.recipient = this.coindata.email;
    console.log(this.emailObj.recipient);
    this.emailservice
      .emailnotification(this.emailObj)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Transaction Sucessfully!!",
      text: "Thank You!",
    });
    
  }
  this.router.navigate(["/navbar/recommendation-service"])
    .then(() => {
      window.location.reload();
    });
    
}
}
