import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat/chat';
import { Message } from 'src/app/models/chat/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // baseUrl="http://localhost:8080";
  baseUrl = "https://swapsquad.stackroute.io";

  constructor(private httpClient: HttpClient) { }


  updateChat(message: Message, chatId: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl + "/chatservice/chats/message/" + `${chatId}`, message);
  }

  getChatById(chatId: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chatservice/chats/" + chatId)
  }

  createChatRoom(chat: Chat): Observable<Object> {
    console.log(chat);
    return this.httpClient.post(this.baseUrl + "/chatservice/chats/add", chat);
  }


  getChatIdByBuyerAndSellerEmail(buyerEmail: String, ownerEmail: String) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chatservice/chats/chatByBothOwnerAndBuyerEmail" + '?buyerEmail=' + buyerEmail + '&ownerEmail=' + ownerEmail)
  }

  getChatByBuyerOrSellerEmail(email: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chatservice/chats/chatByOwnerOrBuyerEmail/" + email)
  }

}
