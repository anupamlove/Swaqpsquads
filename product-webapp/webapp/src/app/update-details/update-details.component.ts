import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { UpdateDetailsService } from "../update-details.service";
import { UserRegistration } from "../user-registration";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-update-details",
  templateUrl: "./update-details.component.html",
  styleUrls: ["./update-details.component.css"],
})
export class UpdateDetailsComponent implements OnInit {
  email: any;
  employees: UserRegistration = new UserRegistration();
  firstname: String;
  lastname: String;
  age: String;
  gender: String;

  mobile: String;
  image: any;
  street: String;
  city: String;
  state: String;
  pincode: string;
  password:String;
  barterCoins:any;
  updateForm: FormGroup;

  constructor(
    private domSanitizer: DomSanitizer,
    private updateDetailsService: UpdateDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      image: new FormControl(),
      street: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
      password:new FormControl(),
      barterCoins:new FormControl()
    });
  }

  ngOnInit(): void {
    this.email=localStorage.getItem('loginEmail')
    console.log(this.email)
    // this.email = this.route.snapshot.params["email"];
    this.updateDetailsService
      .getUserDetailByEmail(this.email)
      .subscribe((data) => {
        this.employees = data;

        this.updateForm.patchValue({
          firstname:this.employees.firstname,
          lastname:this.employees.lastname,
          mobile:this.employees.mobile,
          email:this.employees.email,
          gender:this.employees.gender,
          age:this.employees.age,
          street:this.employees.street,
          city:this.employees.city,
          state:this.employees.state,
          pincode: this.employees.pincode,
          password: this.employees.password,
          barterCoins: this.employees.barterCoins
        })
        this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(
           "data:img/" + "jpg" + ";base64," + this.employees.image);

        // this.firstname = this.employees.firstname;
        // this.lastname = this.employees.lastname;
        // // this.email = this.employees.email;
        // // console.log(this.employees.email)
        // this.mobile = this.employees.mobile;
        // this.age = this.employees.age; 
        // this.street = this.employees.street;
        // this.city = this.employees.city;
        // this.state = this.employees.state;
        // this.pincode = this.employees.pincode;
        // this.gender = this.employees.gender;
        // this.password=this.employees.password;
        // this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(
        //   "data:img/" + "jpg" + ";base64," + this.employees.image
        // );
      });
  }

  updateObj: UserRegistration = new UserRegistration();

  file = [];

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
    console.log(this.updateForm.value);

    this.updateObj.firstname = this.updateForm.value.firstname;
    this.updateObj.lastname = this.updateForm.value.lastname;
    this.updateObj.age = this.updateForm.value.age;
    this.updateObj.gender = this.updateForm.value.gender;
    this.updateObj.email = this.updateForm.value.email;
    this.updateObj.mobile = this.updateForm.value.mobile;
    this.updateObj.gender = this.updateForm.value.gender;
    this.updateObj.street = this.updateForm.value.street;
    this.updateObj.city = this.updateForm.value.city;
    this.updateObj.state = this.updateForm.value.state;
    this.updateObj.pincode = this.updateForm.value.pincode;
    this.updateObj.password = this.updateForm.value.password;
    this.updateObj.barterCoins = this.updateForm.value.barterCoins;

    if(this.file.length==0){
      this.updateDetailsService
      .updatewithoutPicture(this.updateObj)
      .subscribe((data) => console.log(data));
      Swal.fire({
        icon: "success",
        title: "Successfully Updated!!",
        text: "Your Profile Updated Succesfully !",
      });
      this.router.navigateByUrl("/navbar/myProfile");
      // window.location.reload();
    }
    else{
    this.updateDetailsService
      .update(this.updateObj, this.file[0])
      .subscribe((data) => console.log(data));
    // To reset the form
    // this.updateForm.reset();
    Swal.fire({
      icon: "success",
      title: "Successfully Updated!!",
      text: "Your Profile Updated Succesfully !",
    });

    //To navigate to home page
    this.router.navigateByUrl("/navbar/myProfile");
  }
    // else{
    //   Swal.fire({ icon: 'error', title: 'Oops...Empty Feild !!', text: 'Please fill all sections the to continue !', })
    // }
  }

  

}
