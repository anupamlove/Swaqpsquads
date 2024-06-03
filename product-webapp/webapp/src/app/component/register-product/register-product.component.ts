import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterProductService } from '../../services/register-product-service/register-product.service';
import { COMMA, E, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Product } from '../../models/register-product/Product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
})

export class RegisterProductComponent implements OnInit {





  // pexchange: "";
  // pcoin:0;
  productForm: FormGroup;
  pemail=localStorage.getItem("loginEmail");

  constructor(private productService: RegisterProductService,
    private sanitizer: DomSanitizer, private fb: FormBuilder, private router: Router
  ) {
    this.productForm = new FormGroup({
      pcategory: new FormControl("", [Validators.required]),
      pname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      pdatepost: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(350)]),
      pexchangetype: new FormControl(),
      // pcoin: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(8)]),
      // pexchange: this.fb.array([], Validators.required),
      pcoin: new FormControl("", [Validators.pattern("^[0-9]*$"), Validators.maxLength(8)]),
      pexchange: this.fb.array([]),
      // pemail: new FormControl(),
      pstate: new FormControl("", [Validators.required]),
      image: new FormControl([], Validators.required)
    });
  }


  ngOnInit(): void {
this.futureDateDisable();
  }

  productObj: Product = new Product();

  file = [];
  // onselect(e) {
  //   if (e.target.files) {
  //     for (var i = 0; i < File.length; i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       console.log(reader);
  //       reader.onload = (e: any) => {
  //         this.urls.push(e.target.result);

  //       }
  //     }
  //   }
  //   console.log(this.urls)
  // }

  handleFileInput(files) {
    this.prepareFilesList(files);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.file.push(item);
    }
    this.uploadFilesSimulator(0);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.file.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.file[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.file[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  onClickSubmitForm() {

if (!this.productForm.invalid){
  console.log(this.productForm.value);

  this.productObj.pcategory = this.productForm.value.pcategory;
  this.productObj.pname = this.productForm.value.pname;
  this.productObj.pdatepost = this.productForm.value.pdatepost;
  this.productObj.desc = this.productForm.value.desc;
  this.productObj.pexchangetype = this.productForm.value.pexchangetype;
  this.productObj.pexchange = this.productForm.value.pexchange;
  this.productObj.pemail = this.pemail;
  this.productObj.pstate = this.productForm.value.pstate;
  this.productObj.pcoin = this.productForm.value.pcoin;
  this.productObj.pemail=localStorage.getItem('loginEmail')
  this.productService.addProduct(this.productObj, this.file[0]).subscribe(data =>
    console.log(data)
  )
// To reset the form
  this.productForm.reset();
  Swal.fire({ icon: 'success', title: 'Successfully Registered !!', text: 'Your Product Posted Succesfully !', })

  //To navigate to home page
  this.router.navigateByUrl('/navbar/recommendation-service');

}
// else{
//   Swal.fire({ icon: 'error', title: 'Oops...Empty Feild !!', text: 'Please fill all sections the to continue !', })
// }
  }



  // For adding the category
  othercatergory = false;
  show(x): void {
    if (x === 1) {
      this.othercatergory = false;
    } else if (x === 2) {
      this.othercatergory = true;
    }
  }

  // for adding the coin and preference
  coin: boolean = false;
  preference: boolean = false;
  blankspace: boolean = true;
  text(x) {
    if (x == 0) {
      this.coin = true;
      this.preference = false;
      this.productForm.controls['pexchange'].reset();
    } else if (x == 1) {
      this.preference = true;
      this.coin = false;
      this.blankspace = false;
      this.productForm.controls['pcoin'].reset();
    } else if (x == 2) {
      this.coin = true;
      this.preference = true;
      this.blankspace = true;
    }
  }

 

  // for chips

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  get fruitControls(): FormArray {
    return this.productForm.controls.pexchange as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our product
    if ((value || "").trim()) {
      this.fruitControls.push(this.fb.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: string): void {
    const index = this.fruitControls.value.indexOf(fruit);
    if (index >= 0) {
      this.fruitControls.removeAt(index);
    }
  }

  // end for chips
// MM-DD-YYYY
maxDate:any;

futureDateDisable(){
  var date:any=new Date();
  var todayDate:any=date.getDate();
  var month:any=date.getMonth() +1;
  console.log(todayDate);
  console.log(month);
  var year:any=date.getFullYear();

  if(todayDate<10){
    // '0' +9=09
   todayDate='0' + todayDate;  
  }
  if(month<10){
    month = '0' + month;
  }
  console.log(year);
 this.maxDate=year + "-" + month + "-" + todayDate ;

 console.log(this.maxDate);

}

}

function value(value: any) {
  throw new Error('Function not implemented.');
}

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

