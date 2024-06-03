import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterProductComponent } from "./component/register-product/register-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductdetailsComponent } from "./component/productdetails/productdetails.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { HttpClientModule } from "@angular/common/http";
import { RecommendationServiceComponent } from "./recommendation-service/recommendation-service.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ProductDetailsService } from "./component/productdetails/product-details.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { SweetAlertGrow } from "sweetalert2";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdateDetailsComponent } from "./update-details/update-details.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranscationsComponent } from "./transcations/transcations.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { CommonModule } from "@angular/common";
// If You are getting error then install ( npm i ng-starrating )
import { RatingModule } from "ng-starrating";
import { AccountdataComponent } from "./component/accountdata/accountdata.component";
import { MatDialogModule } from "@angular/material/dialog";
import { PaymentComponent } from "./payment/payment.component";
import { ChatComponent } from "./component/chat/chat.component";
import { MatMenuModule } from "@angular/material/menu";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FilterPipe } from "./shared/filter.pipe";
import { Payment2Component } from "./payment2/payment2.component";
import { Payment3Component } from "./payment3/payment3.component";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductregsiteredbyuserComponent } from './productregsiteredbyuser/productregsiteredbyuser.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent,
    RegisterUserComponent,
    RecommendationServiceComponent,
    UpdateDetailsComponent,
    TranscationsComponent,
    MyProfileComponent,
    AccountdataComponent,
    PaymentComponent,
    ChatComponent,
    MyProfileComponent,
    NavbarComponent,
    FilterPipe,
    Payment2Component,
    Payment3Component,
    LoginComponent,
    LandingPageComponent,
    ProductregsiteredbyuserComponent,
  ],

  entryComponents: [
    PaymentComponent,
    Payment2Component,
    Payment3Component,
    AccountdataComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatRippleModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    FlexLayoutModule,
    CommonModule,
    RatingModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
