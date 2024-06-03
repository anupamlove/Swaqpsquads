import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account-data/account';
import { AccountService } from 'src/app/services/accounts-data/account.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

// import * as moment from 'moment';






@Component({
  selector: 'app-accountdata',
  templateUrl: './accountdata.component.html',
  styleUrls: ['./accountdata.component.css']
})
export class AccountdataComponent implements OnInit {
  accountForm: FormGroup;
  accnumarray:any;
  emaildataobj:any;
  public abc:Array<Account>=[];
  accountObj: Account = new Account();
public accountdata : any;
  accountHolderName: any;
  accountNumber:any;
  expiryMonth: any;
  cvv: any;
  amount:any;
  email:any;
  selectednum: string;
 

  



  constructor( private fb: FormBuilder, private accountService: AccountService, private matDialogRef: MatDialogRef<AccountdataComponent>,private router: Router ) { 
    this.accountForm= new FormGroup({
      accountHolderName : new FormControl ("", [Validators.required]),
      accountNumber :new FormControl("",[Validators.required,Validators.pattern('[0-9 ]*'),Validators.minLength(9),Validators.maxLength(18)]),
      cvv : new FormControl("",[Validators.required,Validators.pattern('[0-9 ]*'),Validators.minLength(3),Validators.maxLength(4)]),
      expiryMonth: new FormControl("",[Validators.required]),
      // email :new FormControl("",[Validators.required]),
      
      // accountHolderName : new FormControl (),
      // accountNumber :new FormControl(),
      // cvv : new FormControl(),
      // expiryMonth: new FormControl(),
      amount: new FormControl(),
      // emai: new FormControl()

    })
  }

  ngOnInit() {
    this.accountService.getAccountDataByEmail(localStorage.getItem('loginEmail')).subscribe((resbyemail:any)=>{
      this.emaildataobj=resbyemail;
      console.log(this.emaildataobj);
     
      this.accountNumber=this.emaildataobj.accountNumber;
      // console.log(this.accountNumber);
      for (let i = 0; i < resbyemail.length; i++) {
        this.abc.push(resbyemail[i]);
        }
        // this.abc.map(accountNumber=>{
        //   console.log(accountNumber);
        //   accountNumber.accountNumber=this.accountNumber.accoutNumber;
        //  } );

// var allAccountNumbers= resbyemail.filter(activity => (activity.accountNumber));
// console.log(allAccountNumbers);

// let accnumarray= resbyemail.map((item) =>[item["accountNumber"]]);
// console.log(accnumarray);

});

   


}

// save button
onSave(){
  if(!this.accountForm.invalid){
    console.log(this.accountForm.value);
    this.accountObj.accountHolderName=this.accountForm.value.accountHolderName;
    this.accountObj.accountNumber= this.accountForm.value.accountNumber;
    this.accountObj.cvv=this.accountForm.value.cvv;
    this.accountObj.expiryMonth=this.accountForm.value.expiryMonth;
    this.accountObj.email=localStorage.getItem('loginEmail');
    // this.accountObj.amount=this.accountForm.value.amount;
    this.accountService.addAccount(this.accountObj).subscribe(result =>
      console.log(result)
   );
   
       this.accountForm.reset();
      Swal.fire({ icon: 'success', title: 'Successfully Saved !!', text: 'Your Account is added Succesfully !', })
     
  }
  this.accountService.getAccountDataByEmail(localStorage.getItem('loginEmail')).subscribe((resbyemail:any)=>{
    this.emaildataobj=resbyemail;
    console.log(this.emaildataobj);
   
    this.accountNumber=this.emaildataobj.accountNumber;
    // console.log(this.accountNumber);
    for (let i = 0; i < resbyemail.length; i++) {
      this.abc.push(resbyemail[i]);
      }
    })
  }
  


onclickgetaccount(accm){
  // this.selectednum = (event.target).value;
  console.log(accm);
  this.accountService.getAccountByAccountNumber(accm).subscribe(accresult =>{
    this.accountdata=accresult;
    console.log(this.accountdata);
    this.accountHolderName= this.accountdata.accountHolderName;
    this.accountNumber=this.accountdata.accountNumber;
    this.expiryMonth=this.accountdata.expiryMonth;
    this.cvv =  "***"
    this.email= this.accountdata.email;
 
  }) 
}

// gmail=localStorage.getItem('loginemail');
// gmail=JSON.parse(localStorage.getItem('loginEmail'));




onAddCoin(){
  if(this.accountForm.value.amount!=null){
console.log(this.accountForm.value)
this.accountObj.amount=this.accountForm.value.amount;
this.accountService.addAmount(localStorage.getItem("loginEmail"),this.accountObj.amount).subscribe(updateres =>{
  console.log(updateres)
 

}); this.accountForm.reset();
Swal.fire({ icon: 'success', title: 'Coin added !!', text: 'Coins added Succesfully !', })
// this.disablebutton=false;
  }else{
    Swal.fire({ icon: 'question', title: 'Want to add coins ?', text: 'Enter amount  !', })
  }
  this.matDialogRef.close();
  this.router.navigate(["/navbar/recommendation-service"])
}

onClickClear(){
this.matDialogRef.close();
}
}
