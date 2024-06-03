import { Component, OnInit } from "@angular/core";
import { Product } from "../component/productdetails/product";
import { ProductDetailsService } from "../component/productdetails/product-details.service";
import { MatDialogRef } from "@angular/material/dialog";
import { UpdateDetailsService } from "../update-details.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { UserRegistration } from "../user-registration";
import { Transaction } from "../transaction";
import { TransactionService } from "../transaction.service";
import { EmailService } from "../email.service";
import { EmailDetails } from "../email-details";
import { RecommedationService } from "../services/recommendation-service/recommedation.service";

@Component({
  selector: "app-payment2",
  templateUrl: "./payment2.component.html",
  styleUrls: ["./payment2.component.css"],
})
export class Payment2Component implements OnInit {
  public abc: Array<Product> = [];
  updateForm: FormGroup;

  constructor(
    private _productdetailsService: ProductDetailsService,
    public dialogRef: MatDialogRef<Payment2Component>,
    private userservice: UpdateDetailsService,
    private router: Router,
    private tranactionservice: TransactionService,
    private emailservice: EmailService,
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

   
  }

  onClose() {
    this.dialogRef.close();
  }

  

  productObj: Product = new Product();
  userObj: UserRegistration = new UserRegistration();
  transactionObj: Transaction = new Transaction();
  emailObj: EmailDetails = new EmailDetails();

  onClickSubmitForm() {
    console.log(this.updateForm.value);
    this._productdetailsService
    .updateProductNotAvailable(this.productdata.pid)
    .subscribe((data) => console.log(data));

    this.productObj.pid = this.updateForm.value.pid;
    console.log(this.updateForm.value.pid);
    console.log(this.updateForm.value.pid);
    this._productdetailsService
      .updateProductNotAvailable(this.updateForm.value.pid)
      .subscribe((data) => console.log(data));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Transaction  Unsuccessful!",
      })

   

    console.log(this.productdata1[0].pemail);
    console.log(this.productdata.pemail);
    console.log(this.productdata1[0].pid);
    console.log( this.productdata.pid);
    this.transactionObj.buyerEmail = this.productdata1[0].pemail;
    this.transactionObj.sellerEmail = this.productdata.pemail;
     this.transactionObj.productSend =this.productdata1[0].pid;
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

    this.reccomservice.deleteproductbyId(this.productdata1[0].pid)
    .subscribe((data) => console.log(data));
    this.reccomservice.deleteproductbyId(this.productdata.pid)
    .subscribe((data) => console.log(data));
  Swal.fire({
    icon: "success",
    title: "Product Deleted!!",
    text: "Thank You!",
  });



    this.emailObj.recipient = this.productdata1[0].pemail;
    console.log(this.emailObj.recipient);
    this.emailservice
      .emailnotification(this.emailObj)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Transaction Sucessfully!!",
      text: "Thank You!",
    });
    this.router.navigate(["/navbar/recommendation-service"])
    .then(() => {
      window.location.reload();
    });
  }
}
