import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Route } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AccountdataComponent } from '../component/accountdata/accountdata.component';
import { HttpClient } from '@angular/common/http';
import { NavService } from './service/nav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDisabled:boolean=true
  coin:any=50
  constructor(private dialog: MatDialog,private httpClient:HttpClient,private navservice:NavService,private router: Router ) { }
  usersemail=""
  username=""
  
  ngOnInit(): void {
    this.usersemail=localStorage.getItem('loginEmail')
    this.navservice.getuserdetails(this.usersemail).subscribe((data:any)=>{
    this.username=data.firstname
    this.coin=data.barterCoins
    });
  }

  goToHome():any{
    
  }
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  onClickCoin(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus=false;
    dialogConfig.width= "70%"
    dialogConfig.height = "75%"
    this.dialog.open(AccountdataComponent,dialogConfig);
   


  }
  onClicklogout(){
    // localStorage.removeItem('loginEmail');
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
