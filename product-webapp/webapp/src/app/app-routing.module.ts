
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TranscationsComponent } from './transcations/transcations.component';
import { ChatComponent } from './component/chat/chat.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AccountdataComponent } from './component/accountdata/accountdata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductregsiteredbyuserComponent } from './productregsiteredbyuser/productregsiteredbyuser.component';


const routes: Routes = [
  // { path: 'home', component: AppComponent },
  {path: 'login',component:LoginComponent},
  { path: 'register-user', component: RegisterUserComponent },
  {path:'navbar', component:NavbarComponent,
children:[ 
{ path: 'registerProduct', component: RegisterProductComponent },
{ path: 'productDetail', component: ProductdetailsComponent },
{ path: 'recommendation-service', component: RecommendationServiceComponent },
{ path: 'updateDetails', component: UpdateDetailsComponent },
{path:'transcations', component:TranscationsComponent},
{path:'myProfile', component: MyProfileComponent},
{path:'payment',component:AccountdataComponent},
{path:'transcations', component:TranscationsComponent},
{path:'chat', component:ChatComponent},
{path:'transcations', component:TranscationsComponent},
{path:'myProfile', component: MyProfileComponent},
{ path: 'productregisterbyuser', component: ProductregsiteredbyuserComponent },

]
  },
  {path: '',component:LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

