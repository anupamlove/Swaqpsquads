import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat/chat';
import { Message } from 'src/app/models/chat/message';
import { ChatService } from 'src/app/services/chat/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatForm: FormGroup;
  chatObj: Chat = new Chat();
  messageObj: Message = new Message();
  // chatId: number = 22;
  public messageList = [];
  public chatList = []
  replymessage: String = "checking";
  public chatData: any;
  msg = "Good work";
  chatId = localStorage.getItem('chatId');
  color="";
  ownerEmail="";


  //  For getting the senderEmail from localStorage
  buyerEmail = localStorage.getItem('loginEmail');
  senderEmail = localStorage.getItem('loginEmail');
  senderCheck = localStorage.getItem('loginEmail');

  constructor(private chatService: ChatService, private router: Router) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });

  }

  ngOnInit(): void {

    
    // For the first time displaying the chat by the chatId
    this.chatId = localStorage.getItem('chatId');
    this.chatService.getChatById(this.chatId).subscribe(data => {
      this.chatData = data;
      this.messageList = this.chatData.messageList;
      this.ownerEmail=this.chatData.ownerEmail;
      this.buyerEmail=this.chatData.buyerEmail;
    });

    // For getting all the chat list whose ever is logged in.
    this.chatService.getChatByBuyerOrSellerEmail(localStorage.getItem('loginEmail')).subscribe(data => {
      console.log(data);
      this.chatData = data;
      this.chatList = this.chatData;
      console.log(this.chatList)
      
    });

    console.log("owner",this.ownerEmail);

  }

  loadChatByEmail(event: string, event1: string) {
    console.log(event, event1);
    // For removing the previous chatId
    localStorage.removeItem("chatId");

    // For checking the chat room by both the emails , if there is present then it will give the chat Id in localstorage
    this.chatService.getChatIdByBuyerAndSellerEmail(event, event1).subscribe(data => {
      // console.log(data);
      this.chatData = data;
      this.chatId = this.chatData[0].chatId;
      console.log(this.chatId);
      localStorage.setItem('chatId', this.chatId)

      this.chatService.getChatById(this.chatId).subscribe(data => {
        this.chatData = data;
        this.messageList = this.chatData.messageList;
        this.ownerEmail=this.chatData.ownerEmail;
        this.buyerEmail=this.chatData.buyerEmail;
      });
  
    }
    ) 

    // this.color= "#91fea9"
  }




  sendMessage() {
    console.log(this.chatForm.value);


    // This will call the update chat method when ever user send the message
    this.messageObj.replymessage = this.chatForm.value.replymessage;
    this.messageObj.senderEmail = this.senderEmail;
    this.chatService.updateChat(this.messageObj, this.chatId).subscribe(data => {
      console.log(data);
      this.chatForm.reset();

      // for displaying the messageList by the chatId
      this.chatService.getChatById(this.chatId).subscribe(data => {
        console.log(data);
        this.chatData = data;
        // console.log(this.chatData.messageList);console.log(JSON.stringify(this.chatData.messageList));
        this.messageList = this.chatData.messageList;
        this.ownerEmail=this.chatData.ownerEmail;
        this.buyerEmail=this.chatData.buyerEmail;

      })
    })
  }

  routeX(){
    this.router.navigateByUrl('/navbar/recommendation-service');
  }

  routeHome(){
    this.router.navigateByUrl('');
  }


}
