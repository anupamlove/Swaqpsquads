(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2+J":
/*!**********************************!*\
  !*** ./src/app/email-details.ts ***!
  \**********************************/
/*! exports provided: EmailDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDetails", function() { return EmailDetails; });
class EmailDetails {
    constructor() {
    }
}


/***/ }),

/***/ "+Jk2":
/*!*********************************************************************!*\
  !*** ./src/app/component/productdetails/product-details.service.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() { return ProductDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private url: string ="http://localhost:8080"
        this.url = "https://swapsquad.stackroute.io";
    }
    //get method for obtaining all the product details by id
    //  getProductDetailsById(pid:any): Observable<Product[]>{
    //   return this.httpClient.get<Product[]>(this._url +"api/v1/product/"+1)
    // }
    getProductDetailsById(pid) {
        return this.httpClient.get(this.url + "/productservice/api/v1/product/" + pid);
    }
    getProductDetailsByEmail(pemail) {
        return this.httpClient.get(this.url + "/productservice/api/v1/productavailablebyemail/" + pemail);
    }
    updateProductNotAvailable(pid) {
        return this.httpClient.put(this.url + "/productservice/api/v1/products/" + `${pid}`, pid);
    }
}
ProductDetailsService.ɵfac = function ProductDetailsService_Factory(t) { return new (t || ProductDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductDetailsService, factory: ProductDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/e34":
/*!**************************************************!*\
  !*** ./src/app/component/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_chat_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/chat/chat */ "jjjf");
/* harmony import */ var src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/chat/message */ "sHOe");
/* harmony import */ var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat/chat.service */ "iPoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function ChatComponent_ul_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", chats_r6.ownerEmail.substring(0, 1), " ");
} }
function ChatComponent_ul_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", chats_r6.buyerEmail.substring(0, 1), " ");
} }
function ChatComponent_ul_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chats_r6.ownerEmail, "");
} }
function ChatComponent_ul_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chats_r6.buyerEmail, "");
} }
function ChatComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_ul_9_div_4_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ul_9_div_5_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ul_9_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const chats_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.loadChatByEmail(chats_r6.ownerEmail, chats_r6.buyerEmail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ul_9_div_7_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ul_9_div_8_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chats_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chats_r6.ownerEmail != ctx_r0.senderCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chats_r6.ownerEmail == ctx_r0.senderCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chats_r6.ownerEmail != ctx_r0.senderCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chats_r6.ownerEmail == ctx_r0.senderCheck);
} }
function ChatComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ownerEmail.substring(0, 1));
} }
function ChatComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.buyerEmail.substring(0, 1));
} }
function ChatComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.ownerEmail);
} }
function ChatComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.buyerEmail);
} }
function ChatComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r17.replymessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r17.time.substring(11, 16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r17.senderEmail.substring(0, 1));
} }
function ChatComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r17.senderEmail.substring(0, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r17.replymessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r17.time.substring(11, 16));
} }
function ChatComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_27_div_1_Template, 8, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_27_div_2_Template, 8, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r17 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r17.senderEmail == ctx_r5.senderCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r17.senderEmail != ctx_r5.senderCheck);
} }
class ChatComponent {
    constructor(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.chatObj = new src_app_models_chat_chat__WEBPACK_IMPORTED_MODULE_2__["Chat"]();
        this.messageObj = new src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
        // chatId: number = 22;
        this.messageList = [];
        this.chatList = [];
        this.replymessage = "checking";
        this.msg = "Good work";
        this.chatId = localStorage.getItem('chatId');
        this.color = "";
        this.ownerEmail = "";
        //  For getting the senderEmail from localStorage
        this.buyerEmail = localStorage.getItem('loginEmail');
        this.senderEmail = localStorage.getItem('loginEmail');
        this.senderCheck = localStorage.getItem('loginEmail');
        this.chatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            replymessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    ngOnInit() {
        // For the first time displaying the chat by the chatId
        this.chatId = localStorage.getItem('chatId');
        this.chatService.getChatById(this.chatId).subscribe(data => {
            this.chatData = data;
            this.messageList = this.chatData.messageList;
            this.ownerEmail = this.chatData.ownerEmail;
            this.buyerEmail = this.chatData.buyerEmail;
        });
        // For getting all the chat list whose ever is logged in.
        this.chatService.getChatByBuyerOrSellerEmail(localStorage.getItem('loginEmail')).subscribe(data => {
            console.log(data);
            this.chatData = data;
            this.chatList = this.chatData;
            console.log(this.chatList);
        });
        console.log("owner", this.ownerEmail);
    }
    loadChatByEmail(event, event1) {
        console.log(event, event1);
        // For removing the previous chatId
        localStorage.removeItem("chatId");
        // For checking the chat room by both the emails , if there is present then it will give the chat Id in localstorage
        this.chatService.getChatIdByBuyerAndSellerEmail(event, event1).subscribe(data => {
            // console.log(data);
            this.chatData = data;
            this.chatId = this.chatData[0].chatId;
            console.log(this.chatId);
            localStorage.setItem('chatId', this.chatId);
            this.chatService.getChatById(this.chatId).subscribe(data => {
                this.chatData = data;
                this.messageList = this.chatData.messageList;
                this.ownerEmail = this.chatData.ownerEmail;
                this.buyerEmail = this.chatData.buyerEmail;
            });
        });
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
                this.ownerEmail = this.chatData.ownerEmail;
                this.buyerEmail = this.chatData.buyerEmail;
            });
        });
    }
    routeX() {
        this.router.navigateByUrl('/navbar/recommendation-service');
    }
    routeHome() {
        this.router.navigateByUrl('');
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 37, vars: 7, consts: [[1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "h-100"], [1, "col-md-4", "col-xl-3", "chat"], [1, "card", "mb-sm-3", "mb-md-0", "contacts_card"], [1, "card-header"], [1, "chat-list-title"], [1, "card-body", "contacts_body"], ["class", "contacts chatList", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "col-md-8", "col-xl-7", "chat"], [1, "card"], [1, "card-header", "msg_head"], [1, "d-flex", "bd-highlight"], [1, "img_cont"], ["class", "rounded-circle user_img text_inside_circle1", 4, "ngIf"], [1, "user_info"], [4, "ngIf"], [1, "video_cam"], ["id", "action_menu_btn"], [1, "fa", "fa-xmark", 2, "margin-right", "0.5rem", 3, "click"], [1, "card-body", "msg_card_body"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text", "attach_btn"], ["name", "", "placeholder", "Type your message...", "formControlName", "replymessage", 1, "form-control", "type_msg", 3, "keyup.enter"], ["mat-raised-button", "", 1, "input-group-text", "send_btn", 3, "click"], [1, "fa", "fa-location-arrow"], [1, "contacts", "chatList"], ["class", "rounded-circle user_img text_inside_circle", 4, "ngIf"], [1, "user_info", 3, "click"], ["style", "margin-top: 1rem;", 4, "ngIf"], [1, "rounded-circle", "user_img", "text_inside_circle"], [2, "margin-top", "1rem"], [1, "rounded-circle", "user_img", "text_inside_circle1"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], ["class", "d-flex justify-content-start mb-4", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mb-4"], [1, "msg_cotainer_send"], [1, "msg_time_send"], [1, "img_cont_msg"], [1, "rounded-circle", "user_img_msg", "text_inside_circle2"], [1, "d-flex", "justify-content-start", "mb-4"], [1, "rounded-circle", "user_img_msg", "text_inside_circle3"], [1, "msg_cotainer"], [1, "msg_time"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chat List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_ul_9_Template, 10, 4, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_div_17_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChatComponent_span_19_Template, 2, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_span_20_Template, 2, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_i_click_25_listener() { return ctx.routeX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChatComponent_div_27_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatComponent_Template_textarea_keyup_enter_33_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_35_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerEmail != ctx.senderCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerEmail == ctx.senderCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerEmail != ctx.senderCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerEmail == ctx.senderCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0;\n    \n\n}\n\n.chat[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: auto;\n\n}\n\n.card[_ngcontent-%COMP%] {\n    height: 550px;\n    border-radius: 15px !important;\n    \n    border: 1px solid rgb(140, 200, 253);\n}\n\n.contacts_body[_ngcontent-%COMP%] {\n    padding: 0.75rem 0 !important;\n    overflow-y: auto;\n    white-space: nowrap;\n}\n\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;\n}\n\n.msg_card_body[_ngcontent-%COMP%] {\n    overflow-y: auto;\n}\n\n.msg_card_body[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;\n}\n\n.chat-list-title[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.card-header[_ngcontent-%COMP%] {\n    border-radius: 15px 15px 0 0 !important;\n    border-bottom: 0 !important;\n    background: linear-gradient(90deg, rgb(140, 200, 253) 0%, rgb(93, 226, 241) 100%);\n}\n\n.card-footer[_ngcontent-%COMP%] {\n    border-radius: 0 0 15px 15px !important;\n    border-top: 0 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n    align-content: center;\n}\n\n.search[_ngcontent-%COMP%] {\n    border-radius: 15px 0 0 15px !important;\n    background: linear-gradient(90deg, rgb(97, 151, 198) 0%, rgb(77, 190, 203) 100%) !important;\n    border: 0 !important;\n    color: white !important;\n}\n\n.search[_ngcontent-%COMP%]:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgb(97, 151, 198) 0%, rgb(77, 190, 203) 100%) !important;\n    border: 0 !important;\n    color: white !important;\n    height: 60px !important;\n    overflow-y: auto;\n}\n\n.type_msg[_ngcontent-%COMP%]:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n}\n\n.attach_btn[_ngcontent-%COMP%] {\n    border-radius: 15px 0 0 15px !important;\n    background: rgb(97, 151, 198) !important;\n    border: 0 !important;\n    color: white !important;\n    cursor: pointer;\n}\n\n.send_btn[_ngcontent-%COMP%] {\n    border-radius: 0 15px 15px 0 !important;\n    background-color: rgb(66, 170, 182) !important;\n    border: 0 !important;\n    color: white !important;\n    cursor: pointer;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n    border-radius: 0 15px 15px 0 !important;\n    background-color: rgba(0, 0, 0, 0.3) !important;\n    border: 0 !important;\n    color: white !important;\n    cursor: pointer;\n}\n\n.contacts[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n}\n\n.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding: 5px 10px;\n    margin-bottom: 15px !important;\n}\n\n.active[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.text_inside_circle[_ngcontent-%COMP%] {\n    background: rgb(140, 200, 253);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: capitalize;\n    font-size:1.5rem\n}\n\n.text_inside_circle1[_ngcontent-%COMP%] {\n    background: rgb(167, 165, 165);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: capitalize;\n    font-weight: bold;\n    font-size:1.5rem\n}\n\n.text_inside_circle2[_ngcontent-%COMP%] {\n    background: rgb(77, 190, 203);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: capitalize;\n}\n\n.text_inside_circle3[_ngcontent-%COMP%] {\n    background:rgb(140, 200, 253);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: capitalize;\n}\n\n.user_img[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    border: 1.5px solid #f5f6fa;\n\n}\n\n.user_img_msg[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border: 1.5px solid #f5f6fa;\n\n}\n\n.img_cont[_ngcontent-%COMP%] {\n    position: relative;\n    height: 70px;\n    width: 70px;\n}\n\n.img_cont_msg[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n}\n\n.chatList[_ngcontent-%COMP%]:hover {\n    background-color: #91fea9;\n    cursor: pointer;\n}\n\n.online_icon[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    background-color: #4cd137;\n    border-radius: 50%;\n    bottom: 0.2em;\n    right: 0.4em;\n    border: 1.5px solid white;\n}\n\n.offline[_ngcontent-%COMP%] {\n    background-color: #c23616 !important;\n}\n\n.user_info[_ngcontent-%COMP%] {\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 15px;\n}\n\n.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: white;\n}\n\n.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.6);\n}\n\n.video_cam[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    margin-top: 5px;\n}\n\n.video_cam[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 20px;\n    cursor: pointer;\n    margin-right: 20px;\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 10px;\n    border-radius: 25px;\n    background-color: #a9ece6;\n    padding: 10px;\n    position: relative;\n}\n\n.msg_cotainer_send[_ngcontent-%COMP%] {\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-right: 10px;\n    border-radius: 25px;\n    background-color: #91fea9;\n    padding: 10px;\n    position: relative;\n}\n\n.msg_time[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    bottom: -15px;\n    color: rgba(23, 18, 35, 0.5);\n    font-size: 10px;\n}\n\n.msg_time_send[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    bottom: -15px;\n    color: rgba(23, 18, 35, 0.5);\n    font-size: 10px;\n}\n\n.msg_head[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n#action_menu_btn[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 18px;\n    color: white;\n    cursor: pointer;\n    font-size: 20px;\n}\n\n.action_menu[_ngcontent-%COMP%] {\n    z-index: 1;\n    position: absolute;\n    padding: 15px 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n    border-radius: 15px;\n    top: 30px;\n    right: 15px;\n    display: none;\n}\n\n.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 15px;\n    margin-bottom: 5px;\n}\n\n.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding-right: 10px;\n\n}\n\n.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n@media(max-width: 576px) {\n    .contacts_card[_ngcontent-%COMP%] {\n        margin-bottom: 15px !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLyogYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsYSgxOTYsIDYzJSwgNjElLCAxKSAwJSwgaHNsYSgyNDAsIDQwJSwgNTclLCAxKSAxMDAlKTsgKi9cblxufVxuXG4uY2hhdCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuXG59XG5cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNDAsIDIwMCwgMjUzKSAwJSwgcmdiKDkzLCAyMjYsIDI0MSkgMTAwJSk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MCwgMjAwLCAyNTMpO1xufVxuXG4uY29udGFjdHNfYm9keSB7XG4gICAgcGFkZGluZzogMC43NXJlbSAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xufVxuXG4ubXNnX2NhcmRfYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1zZ19jYXJkX2JvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xufVxuXG4uY2hhdC1saXN0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDE0MCwgMjAwLCAyNTMpIDAlLCByZ2IoOTMsIDIyNiwgMjQxKSAxMDAlKTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWFyY2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig5NywgMTUxLCAxOTgpIDAlLCByZ2IoNzcsIDE5MCwgMjAzKSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50eXBlX21zZyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoOTcsIDE1MSwgMTk4KSAwJSwgcmdiKDc3LCAxOTAsIDIwMykgMTAwJSkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udHlwZV9tc2c6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmF0dGFjaF9idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTcsIDE1MSwgMTk4KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbmRfYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxNzAsIDE4MikgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hfYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhY3RzIGxpIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udGV4dF9pbnNpZGVfY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyMDAsIDI1Myk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZToxLjVyZW1cbn1cblxuLnRleHRfaW5zaWRlX2NpcmNsZTEge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjcsIDE2NSwgMTY1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjEuNXJlbVxufVxuXG4udGV4dF9pbnNpZGVfY2lyY2xlMiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDc3LCAxOTAsIDIwMyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udGV4dF9pbnNpZGVfY2lyY2xlMyB7XG4gICAgYmFja2dyb3VuZDpyZ2IoMTQwLCAyMDAsIDI1Myk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5cbi51c2VyX2ltZyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgI2Y1ZjZmYTtcblxufVxuXG4udXNlcl9pbWdfbXNnIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjVmNmZhO1xuXG59XG5cbi5pbWdfY29udCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLmltZ19jb250X21zZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uY2hhdExpc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWZlYTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub25saW5lX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzNztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm90dG9tOiAwLjJlbTtcbiAgICByaWdodDogMC40ZW07XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm9mZmxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjM2MTYgIWltcG9ydGFudDtcbn1cblxuLnVzZXJfaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udXNlcl9pbmZvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyX2luZm8gcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi52aWRlb19jYW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnZpZGVvX2NhbSBzcGFuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tc2dfY290YWluZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWVjZTY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tc2dfY290YWluZXJfc2VuZCB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWZlYTk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tc2dfdGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTVweDtcbiAgICBjb2xvcjogcmdiYSgyMywgMTgsIDM1LCAwLjUpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1zZ190aW1lX3NlbmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC0xNXB4O1xuICAgIGNvbG9yOiByZ2JhKDIzLCAxOCwgMzUsIDAuNSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXNnX2hlYWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2FjdGlvbl9tZW51X2J0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFjdGlvbl9tZW51IHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aW9uX21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hY3Rpb25fbWVudSB1bCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFjdGlvbl9tZW51IHVsIGxpIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbn1cblxuLmFjdGlvbl9tZW51IHVsIGxpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5jb250YWN0c19jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chaitali/Documents/swapsquad/product-webapp/webapp/src/main.ts */"zUnb");


/***/ }),

/***/ "1pwt":
/*!****************************************************************!*\
  !*** ./src/app/component/accountdata/accountdata.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountdataComponent", function() { return AccountdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_account_data_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/account-data/account */ "CH/G");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_accounts_data_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/accounts-data/account.service */ "nc9Z");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













function AccountdataComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountdataComponent_table_10_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const num_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onclickgetaccount(num_r11.accountNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r11.accountNumber, "");
} }
function AccountdataComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your Name* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Account Number* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Numbers only* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum should be 9 numbers* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximmum should be 18 numbers* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter cvv* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Numbers only* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum should be 3* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximmum should be 4* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountdataComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Month and Year only* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import * as moment from 'moment';
class AccountdataComponent {
    constructor(fb, accountService, matDialogRef, router) {
        this.fb = fb;
        this.accountService = accountService;
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.abc = [];
        this.accountObj = new src_app_models_account_data_account__WEBPACK_IMPORTED_MODULE_2__["Account"]();
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            accountHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            accountNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(18)]),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)]),
            expiryMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // email :new FormControl("",[Validators.required]),
            // accountHolderName : new FormControl (),
            // accountNumber :new FormControl(),
            // cvv : new FormControl(),
            // expiryMonth: new FormControl(),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        this.accountService.getAccountDataByEmail(localStorage.getItem('loginEmail')).subscribe((resbyemail) => {
            this.emaildataobj = resbyemail;
            console.log(this.emaildataobj);
            this.accountNumber = this.emaildataobj.accountNumber;
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
    onSave() {
        if (!this.accountForm.invalid) {
            console.log(this.accountForm.value);
            this.accountObj.accountHolderName = this.accountForm.value.accountHolderName;
            this.accountObj.accountNumber = this.accountForm.value.accountNumber;
            this.accountObj.cvv = this.accountForm.value.cvv;
            this.accountObj.expiryMonth = this.accountForm.value.expiryMonth;
            this.accountObj.email = localStorage.getItem('loginEmail');
            // this.accountObj.amount=this.accountForm.value.amount;
            this.accountService.addAccount(this.accountObj).subscribe(result => console.log(result));
            this.accountForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ icon: 'success', title: 'Successfully Saved !!', text: 'Your Account is added Succesfully !', });
        }
        this.accountService.getAccountDataByEmail(localStorage.getItem('loginEmail')).subscribe((resbyemail) => {
            this.emaildataobj = resbyemail;
            console.log(this.emaildataobj);
            this.accountNumber = this.emaildataobj.accountNumber;
            // console.log(this.accountNumber);
            for (let i = 0; i < resbyemail.length; i++) {
                this.abc.push(resbyemail[i]);
            }
        });
    }
    onclickgetaccount(accm) {
        // this.selectednum = (event.target).value;
        console.log(accm);
        this.accountService.getAccountByAccountNumber(accm).subscribe(accresult => {
            this.accountdata = accresult;
            console.log(this.accountdata);
            this.accountHolderName = this.accountdata.accountHolderName;
            this.accountNumber = this.accountdata.accountNumber;
            this.expiryMonth = this.accountdata.expiryMonth;
            this.cvv = "***";
            this.email = this.accountdata.email;
        });
    }
    // gmail=localStorage.getItem('loginemail');
    // gmail=JSON.parse(localStorage.getItem('loginEmail'));
    onAddCoin() {
        if (this.accountForm.value.amount != null) {
            console.log(this.accountForm.value);
            this.accountObj.amount = this.accountForm.value.amount;
            this.accountService.addAmount(localStorage.getItem("loginEmail"), this.accountObj.amount).subscribe(updateres => {
                console.log(updateres);
            });
            this.accountForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ icon: 'success', title: 'Coin added !!', text: 'Coins added Succesfully !', });
            // this.disablebutton=false;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ icon: 'question', title: 'Want to add coins ?', text: 'Enter amount  !', });
        }
        this.matDialogRef.close();
        this.router.navigate(["/navbar/recommendation-service"]);
    }
    onClickClear() {
        this.matDialogRef.close();
    }
}
AccountdataComponent.ɵfac = function AccountdataComponent_Factory(t) { return new (t || AccountdataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_accounts_data_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AccountdataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountdataComponent, selectors: [["app-accountdata"]], decls: 74, vars: 17, consts: [[2, "background-color", "#eee"], [1, "container", "py-5"], [1, "row"], [1, "col-lg-4"], [1, "card", "mb-4"], [1, "card-body", "text-center"], [1, "save-card", "text-primary", "mb-1"], [1, "d-flex", "justify-content-center", "mb-2"], [4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "card-body"], [1, "close"], [2, "cursor", "pointer", 3, "click"], [3, "formGroup"], [1, "col-sm-3", 2, "padding-top", "1rem"], [1, "col-sm-9"], ["appearance", "outline", 1, "small"], ["matInput", "", "type", "text", "formControlName", "accountHolderName", 2, "text-transform", "uppercase"], ["class", "small", "style", "color: red", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "accountNumber"], ["matInput", "", "type", "password", "formControlName", "cvv"], ["matInput", "", "type", "month", "formControlName", "expiryMonth", 2, "text-transform", "uppercase"], ["matInput", "", "type", "text", "formControlName", "amount", "placeholder", "Enter amount"], [2, "color", "red"], ["type", "button", "type", "submit", 1, "btn", "btn-outline-primary", 2, "padding-left", "1rem", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "ms-3", 3, "click"], [1, "accountnum-box", 3, "click"], [1, "small", 2, "color", "red"]], template: function AccountdataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saved Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountdataComponent_table_10_Template, 4, 1, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountdataComponent_Template_mat_icon_click_15_listener() { return ctx.onClickClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Accountholder Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountdataComponent_span_26_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AccountdataComponent_span_35_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AccountdataComponent_span_36_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AccountdataComponent_span_37_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AccountdataComponent_span_38_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cvv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AccountdataComponent_span_47_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AccountdataComponent_span_48_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AccountdataComponent_span_49_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AccountdataComponent_span_50_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Expiry Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccountdataComponent_span_59_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-hint", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "conversion: 1Coin= 10Rupees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountdataComponent_Template_button_click_70_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Save Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountdataComponent_Template_button_click_72_listener() { return ctx.onAddCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Add Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emaildataobj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountHolderName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["accountHolderName"].touched && ctx.accountForm.controls["accountHolderName"].invalid && (ctx.accountForm.controls["accountHolderName"].errors == null ? null : ctx.accountForm.controls["accountHolderName"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["accountNumber"].touched && ctx.accountForm.controls["accountNumber"].invalid && (ctx.accountForm.controls["accountNumber"].errors == null ? null : ctx.accountForm.controls["accountNumber"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["accountNumber"].touched && ctx.accountForm.controls["accountNumber"].invalid && (ctx.accountForm.controls["accountNumber"].errors == null ? null : ctx.accountForm.controls["accountNumber"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["accountNumber"].touched && ctx.accountForm.controls["accountNumber"].invalid && (ctx.accountForm.controls["accountNumber"].errors == null ? null : ctx.accountForm.controls["accountNumber"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["accountNumber"].touched && ctx.accountForm.controls["accountNumber"].invalid && (ctx.accountForm.controls["accountNumber"].errors == null ? null : ctx.accountForm.controls["accountNumber"].errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cvv, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["cvv"].touched && ctx.accountForm.controls["cvv"].invalid && (ctx.accountForm.controls["cvv"].errors == null ? null : ctx.accountForm.controls["cvv"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["cvv"].touched && ctx.accountForm.controls["cvv"].invalid && (ctx.accountForm.controls["cvv"].errors == null ? null : ctx.accountForm.controls["cvv"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["cvv"].touched && ctx.accountForm.controls["cvv"].invalid && (ctx.accountForm.controls["cvv"].errors == null ? null : ctx.accountForm.controls["cvv"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["cvv"].touched && ctx.accountForm.controls["cvv"].invalid && (ctx.accountForm.controls["cvv"].errors == null ? null : ctx.accountForm.controls["cvv"].errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.expiryMonth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.controls["expiryMonth"].touched && ctx.accountForm.controls["expiryMonth"].invalid && (ctx.accountForm.controls["expiryMonth"].errors == null ? null : ctx.accountForm.controls["expiryMonth"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.accountForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]], styles: [".accountnum-box[_ngcontent-%COMP%]:hover {\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 8px 8px 8px 8px;\n    background: #D9EDFD;\n    box-shadow: 2px 2px 2px 2px #bee4ed;\n}\ntable[_ngcontent-%COMP%]{\n    border-collapse: separate;\n    border-spacing:0.5rem;\n\n}\n.accountnum-box[_ngcontent-%COMP%]{\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 4px 4px 4px 4px;\n\n}\n.close[_ngcontent-%COMP%]:hover{\n    display: flex;\n    align-items: center;\n    background-color: #578893;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7O0FBRTVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5Qjs7QUFFN0IiLCJmaWxlIjoiYWNjb3VudGRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50bnVtLWJveDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRDlFREZEO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjYmVlNGVkO1xufVxudGFibGV7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzowLjVyZW07XG5cbn1cbi5hY2NvdW50bnVtLWJveHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogNHB4IDRweCA0cHggNHB4O1xuXG59XG4uY2xvc2U6aG92ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Nzg4OTM7XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountdataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accountdata',
                templateUrl: './accountdata.component.html',
                styleUrls: ['./accountdata.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_accounts_data_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "6xnw":
/*!********************************************************************!*\
  !*** ./src/app/productregsiteredbyuser/service/product.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //  private url: string ="http://localhost:8080"
        this.url = "https://swapsquad.stackroute.io";
    }
    getproduct(email) {
        return this.httpClient.get(this.url + "/productservice/api/v1/producte/" + email);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7uET":
/*!************************************************!*\
  !*** ./src/app/payment2/payment2.component.ts ***!
  \************************************************/
/*! exports provided: Payment2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment2Component", function() { return Payment2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/productdetails/product */ "Htz6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transaction */ "e69g");
/* harmony import */ var _email_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../email-details */ "+2+J");
/* harmony import */ var _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/productdetails/product-details.service */ "+Jk2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _update_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../update-details.service */ "Ho9W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../transaction.service */ "Q6yC");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../email.service */ "Mdzc");
/* harmony import */ var _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/recommendation-service/recommedation.service */ "SBgC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















function Payment2Component_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pro_r1.pid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pro_r1.pname, " ");
} }
class Payment2Component {
    constructor(_productdetailsService, dialogRef, userservice, router, tranactionservice, emailservice, reccomservice) {
        this._productdetailsService = _productdetailsService;
        this.dialogRef = dialogRef;
        this.userservice = userservice;
        this.router = router;
        this.tranactionservice = tranactionservice;
        this.emailservice = emailservice;
        this.reccomservice = reccomservice;
        this.abc = [];
        this.pid = 1001;
        this.pname = "One Plus 9r";
        this.desc = " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
        this.pcoin = 20000;
        this.pemail = "raju@gmail.com";
        this.pexchangetype = "exchange";
        this.barterCoins = 5000;
        this.productObj = new _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.userObj = new _user_registration__WEBPACK_IMPORTED_MODULE_4__["UserRegistration"]();
        this.transactionObj = new _transaction__WEBPACK_IMPORTED_MODULE_5__["Transaction"]();
        this.emailObj = new _email_details__WEBPACK_IMPORTED_MODULE_6__["EmailDetails"]();
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this._productdetailsService
            .getProductDetailsByEmail(localStorage.getItem("loginEmail"))
            .subscribe((data) => {
            console.log("data", data);
            for (let i = 0; i < data.length; i++) {
                this.abc.push(data[i]);
            }
            this.productdata1 = data;
            this.pid = this.productdata1[0].pid;
            this.pemail = this.productdata1[0].pemail;
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
            this.pexchangetype = this.productdata.pexchangetype;
        });
    }
    onClose() {
        this.dialogRef.close();
    }
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: "error",
            title: "Oops...",
            text: "Transaction  Unsuccessful!",
        });
        console.log(this.productdata1[0].pemail);
        console.log(this.productdata.pemail);
        console.log(this.productdata1[0].pid);
        console.log(this.productdata.pid);
        this.transactionObj.buyerEmail = this.productdata1[0].pemail;
        this.transactionObj.sellerEmail = this.productdata.pemail;
        this.transactionObj.productSend = this.productdata1[0].pid;
        this.transactionObj.productObtained = this.productdata.pid;
        this.transactionObj.method_of_Transaction = this.productdata.pexchangetype;
        this.transactionObj.price_of_Product_in_coins = this.productdata.pcoin;
        this.tranactionservice
            .saveTransaction(this.transactionObj)
            .subscribe((data) => console.log(data));
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: "success",
            title: "Tranaction Saved!!",
            text: "Thank You!",
        });
        this.reccomservice.deleteproductbyId(this.productdata1[0].pid)
            .subscribe((data) => console.log(data));
        this.reccomservice.deleteproductbyId(this.productdata.pid)
            .subscribe((data) => console.log(data));
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: "success",
            title: "Product Deleted!!",
            text: "Thank You!",
        });
        this.emailObj.recipient = this.productdata1[0].pemail;
        console.log(this.emailObj.recipient);
        this.emailservice
            .emailnotification(this.emailObj)
            .subscribe((data) => console.log(data));
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
Payment2Component.ɵfac = function Payment2Component_Factory(t) { return new (t || Payment2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_details_service__WEBPACK_IMPORTED_MODULE_9__["UpdateDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_transaction_service__WEBPACK_IMPORTED_MODULE_11__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_12__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_13__["RecommedationService"])); };
Payment2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Payment2Component, selectors: [["app-payment2"]], decls: 31, vars: 5, consts: [[1, "pl"], ["mat-stroked-button", "", "tabIndex", "-3", 1, "btn-dialog-close", 3, "click"], [1, "center-wrapper"], [1, "content"], [3, "formGroup"], [1, "top-bar", 2, "text-align", "center"], [1, "bag-product"], [1, "description"], [1, "product-code"], [1, "description-text"], [1, "bag-total"], [1, "promo-checkbox"], [1, "total"], [1, "col-md-5", "labelname"], [1, "fa-solid", "fa-right-left", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], ["formControlName", "pid", "ngDefaultControl", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 2, "background", "hsla(106, 86%, 57%, 0.762)", 3, "click"], [3, "value"]], template: function Payment2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Payment2Component_Template_button_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Payment2Component_mat_option_28_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Payment2Component_Template_button_click_29_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Request Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product ID: ", ctx.productdata.pid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abc);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], styles: [".btn-dialog-close[_ngcontent-%COMP%]{\n  \n  margin-left: 600px;\n  padding-top: 0px;\n}\n\n\n.center-wrapper[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 80%; \n  }\n\n\n.content[_ngcontent-%COMP%] { \n    margin: 0 auto;\n    max-width: 600px; \n   }\n\n\n.description[_ngcontent-%COMP%] { \n    padding-right: 1rem;\n    width: 60%; }\n\n\n.total[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n\n\n.top-bar[_ngcontent-%COMP%], .bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before { background: rgb(180, 202, 251); }\n\n\n.bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before {\n    content: \"\";\n    width: 100%;\n    height: 3px;\n    display: block;  }\n\n\n.bag-product[_ngcontent-%COMP%], .quantity-wrapper[_ngcontent-%COMP%], .total[_ngcontent-%COMP%]\n     {\n      display: flex;\n      justify-content: space-between; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUdBO0lBQ0ksZUFBZTtJQUdmLGFBQWE7SUFJTCxzQkFBc0I7SUFHdEIsdUJBQXVCO0lBQy9CLFdBQVc7RUFDYjs7O0FBR0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0dBQ2pCOzs7QUFJRDtJQUNFLG1CQUFtQjtJQUNuQixVQUFVLEVBQUU7OztBQUdkLFNBQVMsbUJBQW1CLEVBQUU7OztBQUc5Qjs7dUJBRXFCLDhCQUE4QixFQUFFOzs7QUFHckQ7O0lBRUUsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYyxHQUFHOzs7QUFHakI7Ozs7TUFNRSxhQUFhO01BR1AsOEJBQThCLEVBQUUiLCJmaWxlIjoicGF5bWVudDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bi1kaWFsb2ctY2xvc2V7XG4gIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cbiAgbWFyZ2luLWxlZnQ6IDYwMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5cbi5jZW50ZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7IFxuICB9XG4gIFxuICBcbiAgLmNvbnRlbnQgeyBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyBcbiAgIH1cbiAgXG4gIFxuICBcbiAgLmRlc2NyaXB0aW9uIHsgXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB3aWR0aDogNjAlOyB9XG4gIFxuICBcbiAgLnRvdGFsIHsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICBcbiAgXG4gIC50b3AtYmFyLFxuICAuYmFnLWhlYWQ6OmFmdGVyLFxuICAuYmFnLXRvdGFsOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2IoMTgwLCAyMDIsIDI1MSk7IH1cbiAgXG4gIFxuICAuYmFnLWhlYWQ6OmFmdGVyLFxuICAuYmFnLXRvdGFsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgZGlzcGxheTogYmxvY2s7ICB9XG4gIFxuICBcbiAgICAuYmFnLXByb2R1Y3QsXG4gICAgLnF1YW50aXR5LXdyYXBwZXIsXG4gICAgLnRvdGFsXG4gICAgIHsgXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgXG4gIFxuICBcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Payment2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-payment2",
                templateUrl: "./payment2.component.html",
                styleUrls: ["./payment2.component.css"],
            }]
    }], function () { return [{ type: _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }, { type: _update_details_service__WEBPACK_IMPORTED_MODULE_9__["UpdateDetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _transaction_service__WEBPACK_IMPORTED_MODULE_11__["TransactionService"] }, { type: _email_service__WEBPACK_IMPORTED_MODULE_12__["EmailService"] }, { type: _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_13__["RecommedationService"] }]; }, null); })();


/***/ }),

/***/ "9fun":
/*!**********************************************************************!*\
  !*** ./src/app/component/productdetails/productdetails.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "Htz6");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payment/payment.component */ "DI59");
/* harmony import */ var _payment2_payment2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payment2/payment2.component */ "7uET");
/* harmony import */ var _payment3_payment3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../payment3/payment3.component */ "hFLO");
/* harmony import */ var src_app_models_chat_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/chat/chat */ "jjjf");
/* harmony import */ var _product_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.service */ "+Jk2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _userrating_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userrating.service */ "T9SP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/chat/chat.service */ "iPoy");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




















function ProductdetailsComponent_mat_chip_list_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
} }
function ProductdetailsComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "star-rating", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ratin_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ratin_r3.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ratin_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("totalstars", ctx_r1.totalstar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ratin_r3.reviews);
} }
class ProductdetailsComponent {
    constructor(_productdetailsService, domSanitizer, userratingservice, router, dialog, chatService) {
        this._productdetailsService = _productdetailsService;
        this.domSanitizer = domSanitizer;
        this.userratingservice = userratingservice;
        this.router = router;
        this.dialog = dialog;
        this.chatService = chatService;
        this.employees = new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.pemail = "";
        this.pname = "One Plus 9r";
        this.plocation = "Patna,Bihar";
        this.pstatus = "Available";
        this.pdate = "";
        this.pcoin = 20000;
        this.pdatepost = "";
        this.pexchangetype = "exchange";
        this.desc = " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
        this.pcategory = "";
        this.totalstar = "5";
        //<============================ Payment Service Starts Here=========================>
        this.getExchangeDisable = false;
        //<============================ Chat Service Starts Here=========================>
        this.ownerEmail = "";
        this.buyerEmail = localStorage.getItem("loginEmail");
        this.chatObj = new src_app_models_chat_chat__WEBPACK_IMPORTED_MODULE_5__["Chat"]();
        this.chatId = 0;
        this.chatNotFound = "";
    }
    ngOnInit() {
        this._productdetailsService.getProductDetailsById(localStorage.getItem("productId")).subscribe((data) => {
            this.productdata = data;
            this.pname = this.productdata.pname;
            this.pemail = this.productdata.pemail;
            this.pcategory = this.productdata.pcategory;
            // this.plocation = this.productdata.plocation
            this.pstate = this.productdata.pstate;
            this.pcity = this.productdata.pcity;
            this.pdate = this.productdata.pdate;
            this.pdatepost = this.productdata.pdatepost;
            this.pcoin = this.productdata.pcoin;
            this.pexchange = this.productdata.pexchange;
            this.pexchangetype = this.productdata.pexchangetype;
            this.desc = this.productdata.desc;
            this.img = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + this.productdata.image);
            this.ownerEmail = this.productdata.pemail;
            var t = this.pdatepost;
            this.dateofpurchase = t.substring(0, 10);
            var t2 = this.pdate;
            this.dateofposting = t2.substring(0, 10);
        });
        this._productdetailsService.getProductDetailsById(localStorage.getItem("productId")).subscribe((data) => {
            this.productdata = data;
            console.log(this.pemail);
            this.userratingservice.getUserRatingByEmail(this.pemail).subscribe(dataofrating => {
                this.userratingdata = dataofrating;
                console.log(this.userratingdata);
                this.ratings = this.userratingdata.ratings;
                this.avgRating = this.userratingdata.avgRating;
            });
        });
    }
    openDialog() {
        if (this.pemail == localStorage.getItem('loginEmail')) {
            this.getExchangeDisable = true;
        }
        else {
            this.getExchangeDisable = false;
            console.log(this.productdata.pexchangetype);
            if (this.productdata.pexchangetype == "COIN") {
                this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"]);
            }
            else if (this.productdata.pexchangetype == "BARTER") {
                this.dialog.open(_payment2_payment2_component__WEBPACK_IMPORTED_MODULE_3__["Payment2Component"]);
            }
            else {
                this.dialog.open(_payment3_payment3_component__WEBPACK_IMPORTED_MODULE_4__["Payment3Component"]);
            }
        }
    }
    // For routing to the chat page when click on chat button
    goToChat() {
        // For string the buyerEmail or whose ever logged in, in localstorage
        localStorage.setItem("buyerEmail", this.buyerEmail);
        if (this.ownerEmail != this.buyerEmail) {
            // For checking the chat room by both the emails , if there is present then it will give the chat Id in localstorage
            this.chatService
                .getChatIdByBuyerAndSellerEmail(this.buyerEmail, this.ownerEmail)
                .subscribe((data) => {
                // console.log(data);
                this.chatData = data;
                this.chatId = this.chatData[0].chatId;
                console.log(this.chatId);
                localStorage.setItem('chatId', this.chatData[0].chatId);
            }, (error) => {
                console.log(error.error);
                this.chatNotFound = error.error;
                //  If the chat room is not already present then it will create new chat room and give the chatId in localstorage
                this.chatObj.buyerEmail = this.buyerEmail;
                this.chatObj.ownerEmail = this.ownerEmail;
                this.chatService.createChatRoom(this.chatObj).subscribe((data) => {
                    console.log(data);
                    this.chatData = data;
                    this.chatId = this.chatData.chatId;
                    localStorage.setItem('chatId', this.chatData.chatId);
                });
            });
        }
        // define your component where you want to go
        this.router.navigate(["/navbar/chat"]);
    }
}
ProductdetailsComponent.ɵfac = function ProductdetailsComponent_Factory(t) { return new (t || ProductdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_details_service__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userrating_service__WEBPACK_IMPORTED_MODULE_8__["UserratingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"])); };
ProductdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductdetailsComponent, selectors: [["app-productdetails"]], decls: 91, vars: 13, consts: [[1, "main-content"], [1, "row", "product-content"], [1, "col-lg-1", "col-md-1", "col-sm-2", "col-2", "lft-scroll-box"], [1, "col-lg-4", "col-md-4", "col-sm-8", "col-8"], [1, "row"], [1, "col-lg-9", "col-md-9", "col-sm-9", "main-image"], ["cols", "1", "rowHeight", "1:1"], ["mat-card-image", "", "alt", "img", 2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], [1, "col-lg-3"], [1, "col-lg-6", "col-md-6", "col-sm-10", "col-10"], [2, "font-size", "3.2vw"], [1, "row", 2, "font-size", "1.2vw"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-6"], [1, "material-icons"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-6", "post-date"], [1, "row", 2, "margin-top", "1rem"], [1, "coin-box"], [1, "fa-solid", "fa-coins"], [1, "row", 2, "margin-bottom", "0rem", "margin-top", "2rem", "font-size", "1.2vw"], [1, "preference"], [2, "margin-right", "0.5rem"], ["aria-label", "preference selection", "style", "float: left", 4, "ngFor", "ngForOf"], [1, "col-lg-1", "col-md-1"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-1"], [1, "col-lg-4", "col-md-4", "col-sm-10", "col-10"], [1, "user-profile-box", "col-lg-9", "col-md-6", "col-sm-12"], [1, "example-card"], [1, "product-owner"], [1, "product-owner-details", "col-sm-12"], [1, "product-owner-details"], ["checkedcolor", "blue", "uncheckedcolor", "black", "size", "15px", "readonly", "false", 3, "value", "totalstars"], [1, "produuct-owners"], ["align", "end"], ["mat-raised-button", "", 2, "background", "#43db52", "color", "white", 3, "click"], [1, "description-text-box"], ["align", "end", 1, "exchange-button"], ["mat-raised-button", "", "color", "primary", "disable", "getExchangeDisable", 3, "click"], [1, "row", 2, "padding", "0rem 1rem 0rem 1.5rem"], [1, "col-lg-4", "col-md-4"], [1, "col-lg-6", "col-md-6", "col-sm-10", "col-10", "user-profile-box-review"], ["calss", "review-table", "style", "margin-top: 0.5rem", 4, "ngFor", "ngForOf"], ["aria-label", "preference selection", 2, "float", "left"], ["calss", "review-table", 2, "margin-top", "0.5rem"], [2, "margin-bottom", "1rem"], [1, "review-box", 2, "padding-left", "0.5rem", "border-radius", "10px"], [1, "review-box", 2, "padding-top", "-0.5rem"]], template: function ProductdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Date of Posting :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Exchange Mode : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Year Of Purchase :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Preferences :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProductdetailsComponent_mat_chip_list_47_Template, 3, 1, "mat-chip-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Product Owner Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "star-rating", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-actions", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductdetailsComponent_Template_button_click_71_listener() { return ctx.goToChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Description of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductdetailsComponent_Template_button_click_82_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ProductdetailsComponent_div_89_Template, 9, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pstate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dateofposting, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pcoin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pexchangetype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dateofpurchase, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pexchange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.avgRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("totalstars", ctx.totalstar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratings);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], ng_starrating__WEBPACK_IMPORTED_MODULE_16__["StarRatingComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChip"]], styles: [".main-content[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    margin-top: 1rem;\n}\n\np[_ngcontent-%COMP%] {\n    padding-left: 0.25rem;\n}\n\n.post-date[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: right;\n}\n\n.container[_ngcontent-%COMP%] {\n\n    width: 15rem;\n    margin-top: 10rem;\n    margin-left: 5rem;\n\n}\n\n.material-icons-user[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n.container1[_ngcontent-%COMP%] {\n    margin-left: 3rem;\n    width: 20rem;\n}\n\nmat-raised[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    float: left;\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    \n}\n\n.user-profile-box[_ngcontent-%COMP%] {\n    border: 1px solid rgb(70, 66, 66);\n    margin-top: 1rem;\n    border-radius: 3px;\n    \n}\n\n.user-profile-box-review[_ngcontent-%COMP%] {\n    border: 1px solid black;\n    margin-top: -2rem;\n    border-radius: 3px;\n    min-height: 6rem;\n    max-height: 10rem;\n    overflow-y: auto;\n}\n\n.preference[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    \n    height: 3.5rem;\n    border-radius: 6px;\n    margin-top: 0rem;\n    padding-top: 0.5rem;\n    background: #E7EEE7;\n    overflow-x: auto;\n    overflow-y: auto;\n    \n    \n}\n\n\n\n.main-image[_ngcontent-%COMP%]{\n\n    border-radius: 6px;\n    -o-object-fit: fill;\n       object-fit: fill;\n    \n}\n\n.lft-scroll-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: separate;\n    border-spacing: 0 10px;\n}\n\n.preference-chip[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-right: 1rem;\n    margin-top: -1rem;\n\n}\n\n.description-text-box[_ngcontent-%COMP%] {\n    border:1px solid rgb(58, 10, 134);\n    margin-top: -4rem;\n    border-radius: 6px;\n    min-height:9rem; \n    max-height:12px;\n    overflow-y: auto;\n    \n    \n}\n\n@media screen and (min-width: 1250px) and (max-width: 1450px){\n    .description-text-box[_ngcontent-%COMP%] {\n        border:1px solid rgb(58, 10, 134);\n        margin-top: 1rem;\n        border-radius: 6px;\n        min-height: 7rem; \n        max-height:10px;\n        overflow-y: auto;\n    }\n    .example-card[_ngcontent-%COMP%]{\n        width: 18rem;\n    }\n\n    .user-profile-box-review[_ngcontent-%COMP%] {\n        border: 1px solid black;\n        margin-top: 0rem;\n        border-radius: 3px;\n        min-height: 6rem;\n        max-height: 10rem;\n        overflow-y: auto;\n    }\n}\n\n@media screen and (min-width: 750px) and (max-width: 1250px){\n    .description-text-box[_ngcontent-%COMP%] {\n        border:1px solid rgb(58, 10, 134);\n        margin-top: 1rem;\n        border-radius: 6px;\n        min-height: 6rem; \n        max-height:9px;\n        overflow-y: auto;\n    }\n    .example-card[_ngcontent-%COMP%]{\n        width: 14rem;\n    }\n\n    .user-profile-box-review[_ngcontent-%COMP%] {\n        border: 1px solid black;\n        margin-top: 1rem;\n        border-radius: 3px;\n        min-height: 6rem;\n        max-height: 10rem;\n        overflow-y: auto;\n\n    }\n}\n\n.exchange-button[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n}\n\n\n\n.product-content[_ngcontent-%COMP%] {}\n\n.coin-box[_ngcontent-%COMP%]:hover {\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 4px 4px 4px 4px;\n    background: #D9EDFD;\n    box-shadow: 2px 2px 2px 2px #bee4ed;\n    \n    \n}\n\n.coin-box[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 4px 4px 4px 4px;\n    background: #D9EDFD;   \n   \n}\n\n@media screen and (min-width: 300px) and (max-width: 500px){\n    .description-text-box[_ngcontent-%COMP%] {\n        border:1px solid rgb(58, 10, 134);\n        margin-top: 1rem;\n        border-radius: 6px;\n        min-height: 6rem; \n        max-height:9px;\n        overflow-y: auto;\n    }\n    .user-profile-box-review[_ngcontent-%COMP%] {\n        border: 1px solid black;\n        margin-top: 1rem;\n        border-radius: 3px;\n        min-height: 6rem;\n        max-height: 10rem;\n        overflow-y: auto;\n    }\n    \n    }\n\n\n\n.review-box[_ngcontent-%COMP%]{\n        display: inline-block;\n        background-color:rgb(183, 183, 206);\n        min-width:28rem;\n        max-width: 39rem;\n     \n    }\n\n.product-owner-details[_ngcontent-%COMP%]{\n        display:inline-block;\n    }\n\n@media screen and (min-width: 500px) and (max-width: 700px){\n        .description-text-box[_ngcontent-%COMP%] {\n            border:1px solid rgb(58, 10, 134);\n            margin-top: 1rem;\n            border-radius: 6px;\n            min-height: 6rem; \n            max-height:9px;\n            overflow-y: auto;\n        }\n        .user-profile-box-review[_ngcontent-%COMP%] {\n            border: 1px solid black;\n            margin-top: 1rem;\n            border-radius: 3px;\n            min-height: 6rem;\n            max-height: 10rem;\n            overflow-y: auto;\n        }\n        \n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOzs7Ozs7R0FNRzs7QUFJSDtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFJQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7O0FBR3BCOztBQUdBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFnQjtPQUFoQixnQkFBZ0I7O0FBRXBCOztBQUlBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjs7O0FBR3BCOztBQUVBO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlDQUFpQztRQUNqQyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7O0lBRXBCO0FBQ0o7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0EsWUFBWTs7QUFHWixrQkFBa0I7O0FBRWxCO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1DQUFtQzs7O0FBR3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBOztBQUVBOzs7U0FHSzs7QUFDTDtRQUNJLHFCQUFxQjtRQUNyQixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLGdCQUFnQjs7SUFFcEI7O0FBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7O0FBRUE7UUFDSTtZQUNJLGlDQUFpQztZQUNqQyxnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsZ0JBQWdCO1FBQ3BCO1FBQ0E7WUFDSSx1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQjs7UUFFQSIsImZpbGUiOiJwcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keXtcbiAgICBcbiAgICBcbn0gKi9cblxuLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG59XG5cbi5wb3N0LWRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuXG4uY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcblxufVxuXG4ubWF0ZXJpYWwtaWNvbnMtdXNlciB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY29udGFpbmVyMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xufVxuXG5tYXQtcmFpc2VkIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qIC5zY3JvbGwtZWxle1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB3aWR0aDogNTByZW07XG4gICAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xuICAgIG1hcmdpbi10b3A6IC0yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufSAqL1xuXG5cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXG59XG5cbi51c2VyLXByb2ZpbGUtYm94IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzAsIDY2LCA2Nik7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLyogd2lkdGg6IDIwcmVtOyAqL1xufVxuXG4udXNlci1wcm9maWxlLWJveC1yZXZpZXcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4taGVpZ2h0OiA2cmVtO1xuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuXG4ucHJlZmVyZW5jZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogI0U3RUVFNztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgXG4gICAgXG59XG5cblxuLyogLmltYWdlLXNjcm9sbC1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgIFxuICAgIFxufSAqL1xuXG4ubWFpbi1pbWFnZXtcblxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xuICAgIFxufVxuXG5cblxuLmxmdC1zY3JvbGwtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xufVxuXG4ucHJlZmVyZW5jZS1jaGlwIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcblxufVxuXG4uZGVzY3JpcHRpb24tdGV4dC1ib3gge1xuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDU4LCAxMCwgMTM0KTtcbiAgICBtYXJnaW4tdG9wOiAtNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWluLWhlaWdodDo5cmVtOyBcbiAgICBtYXgtaGVpZ2h0OjEycHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBcbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KSBhbmQgKG1heC13aWR0aDogMTQ1MHB4KXtcbiAgICAuZGVzY3JpcHRpb24tdGV4dC1ib3gge1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYig1OCwgMTAsIDEzNCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWluLWhlaWdodDogN3JlbTsgXG4gICAgICAgIG1heC1oZWlnaHQ6MTBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLmV4YW1wbGUtY2FyZHtcbiAgICAgICAgd2lkdGg6IDE4cmVtO1xuICAgIH1cblxuICAgIC51c2VyLXByb2ZpbGUtYm94LXJldmlldyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpe1xuICAgIC5kZXNjcmlwdGlvbi10ZXh0LWJveCB7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDU4LCAxMCwgMTM0KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2cmVtOyBcbiAgICAgICAgbWF4LWhlaWdodDo5cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5leGFtcGxlLWNhcmR7XG4gICAgICAgIHdpZHRoOiAxNHJlbTtcbiAgICB9XG5cbiAgICAudXNlci1wcm9maWxlLWJveC1yZXZpZXcge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIH1cbn1cblxuXG4uZXhjaGFuZ2UtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5cbi8qIGNoYW5nZXMgKi9cblxuXG4ucHJvZHVjdC1jb250ZW50IHt9XG5cbi5jb2luLWJveDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjRDlFREZEO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjYmVlNGVkO1xuICAgIFxuICAgIFxufVxuXG4uY29pbi1ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA0cHggNHB4IDRweCA0cHg7XG4gICAgYmFja2dyb3VuZDogI0Q5RURGRDsgICBcbiAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAuZGVzY3JpcHRpb24tdGV4dC1ib3gge1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYig1OCwgMTAsIDEzNCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWluLWhlaWdodDogNnJlbTsgXG4gICAgICAgIG1heC1oZWlnaHQ6OXB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICAudXNlci1wcm9maWxlLWJveC1yZXZpZXcge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgLyogLnJldmlldy10YWJsZS50ZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfSAqL1xuICAgIC5yZXZpZXctYm94e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4MywgMTgzLCAyMDYpO1xuICAgICAgICBtaW4td2lkdGg6MjhyZW07XG4gICAgICAgIG1heC13aWR0aDogMzlyZW07XG4gICAgIFxuICAgIH1cbiAgICAucHJvZHVjdC1vd25lci1kZXRhaWxze1xuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbiAgICAgICAgLmRlc2NyaXB0aW9uLXRleHQtYm94IHtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDU4LCAxMCwgMTM0KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtOyBcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6OXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudXNlci1wcm9maWxlLWJveC1yZXZpZXcge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfVxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-productdetails",
                templateUrl: "./productdetails.component.html",
                styleUrls: ["./productdetails.component.css"],
            }]
    }], function () { return [{ type: _product_details_service__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _userrating_service__WEBPACK_IMPORTED_MODULE_8__["UserratingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] }]; }, null); })();
function gmail(gmail) {
    throw new Error("Function not implemented.");
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    local: 'local',
    apiBaseUrl: 'https://swapsquad.stackroute.io',
    localUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BNPy":
/*!**************************************************************!*\
  !*** ./src/app/transcations/service/tran-service.service.ts ***!
  \**************************************************************/
/*! exports provided: TranServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranServiceService", function() { return TranServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TranServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private url: string ="http://localhost:8080"
        // private urlp: string ="http://localhost:8080"
        // private urluser: string ="http://localhost:8080"
        this.url = "https://swapsquad.stackroute.io";
        this.urlp = "https://swapsquad.stackroute.io";
        this.urluser = "https://swapsquad.stackroute.io";
    }
    getTranscationsByByerEmailId(email) {
        return this.httpClient.get(this.url + "/transactionservice/BuyerEmail/" + email);
    }
    getTranscationsBySellerEmailId(email) {
        return this.httpClient.get(this.url + "/transactionservice/SellerEmail/" + email);
    }
    getProductByName(name) {
        return this.httpClient.get(this.urlp + "/productservice/api/v1/product/" + name);
    }
    ratebyemail(rating, email) {
        return this.httpClient.put(this.urluser + "/userservice/users/rate/" + email, rating);
    }
}
TranServiceService.ɵfac = function TranServiceService_Factory(t) { return new (t || TranServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TranServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranServiceService, factory: TranServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "CH/G":
/*!************************************************!*\
  !*** ./src/app/models/account-data/account.ts ***!
  \************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
class Account {
    constructor() {
    }
}


/***/ }),

/***/ "DI59":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/productdetails/product */ "Htz6");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction */ "e69g");
/* harmony import */ var _email_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../email-details */ "+2+J");
/* harmony import */ var _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/accountdata/accountdata.component */ "1pwt");
/* harmony import */ var _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/productdetails/product-details.service */ "+Jk2");
/* harmony import */ var _update_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update-details.service */ "Ho9W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../transaction.service */ "Q6yC");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../email.service */ "Mdzc");
/* harmony import */ var _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/recommendation-service/recommedation.service */ "SBgC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















class PaymentComponent {
    constructor(_productdetailsService, dialogRef, userservice, router, tranactionservice, emailservice, dialog, reccomservice) {
        this._productdetailsService = _productdetailsService;
        this.dialogRef = dialogRef;
        this.userservice = userservice;
        this.router = router;
        this.tranactionservice = tranactionservice;
        this.emailservice = emailservice;
        this.dialog = dialog;
        this.reccomservice = reccomservice;
        this.abc = [];
        this.pid = 1001;
        this.pname = "One Plus 9r";
        this.desc = " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
        this.pcoin = 20000;
        this.pemail = "raju@gmail.com";
        this.pexchangetype = "exchange";
        this.barterCoins = 5000;
        // addcoin() {
        //   this.router.navigate(["payment"]);
        // }
        this.productObj = new _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.userObj = new _user_registration__WEBPACK_IMPORTED_MODULE_5__["UserRegistration"]();
        this.transactionObj = new _transaction__WEBPACK_IMPORTED_MODULE_6__["Transaction"]();
        this.emailObj = new _email_details__WEBPACK_IMPORTED_MODULE_7__["EmailDetails"]();
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            pid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    ngOnInit() {
        this._productdetailsService
            .getProductDetailsByEmail(localStorage.getItem("loginEmail"))
            .subscribe((data) => {
            console.log("data", data);
            for (let i = 0; i < data.length; i++) {
                this.abc.push(data[i]);
            }
            this.productdata1 = data;
            this.pid = this.productdata1[0].pid;
            this.pemail = this.productdata1[0].pemail;
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
            this.pexchangetype = this.productdata.pexchangetype;
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
    onClickCoin() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.restoreFocus = false;
        dialogConfig.width = "70%";
        dialogConfig.height = "75%";
        this.dialog.open(_component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_8__["AccountdataComponent"], dialogConfig);
    }
    onClickSubmitForm() {
        if (this.coindata.barterCoins < this.productdata.pcoin) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Insufficient Coin",
                text: "Please Add More Coin!",
            });
        }
        else {
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
                .exchange(this.coindata.email, this.productdata.pemail, this.productdata.pcoin)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Requested for Exchange!!",
                text: "Thank You!",
            });
            this.transactionObj.buyerEmail = this.productdata1[0].pemail;
            this.transactionObj.sellerEmail = this.productdata.pemail;
            //  this.transactionObj.productSend =this.productdata1[0].pid;
            this.transactionObj.productObtained = this.productdata.pid;
            this.transactionObj.method_of_Transaction = this.productdata.pexchangetype;
            this.transactionObj.price_of_Product_in_coins = this.productdata.pcoin;
            this.tranactionservice
                .saveTransaction(this.transactionObj)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Tranaction Saved!!",
                text: "Thank You!",
            });
            this.reccomservice.deleteproductbyId(this.productdata.pid)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Product Deleted!!",
                text: "Thank You!",
            });
            this.emailObj.recipient = this.coindata.email;
            console.log(this.emailObj.recipient);
            this.emailservice
                .emailnotification(this.emailObj)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__["RecommedationService"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 38, vars: 6, consts: [[1, "pl"], ["mat-stroked-button", "", "tabIndex", "-3", 1, "btn-dialog-close", 3, "click"], [1, "center-wrapper"], [1, "content"], [3, "formGroup"], [1, "top-bar", 2, "text-align", "center"], [1, "bag-product"], [1, "description"], [1, "product-code"], [1, "description-text"], [1, "bag-total"], [1, "fa-solid", "fa-coins", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], [1, "form-group"], ["for", "promo-check"], [1, "promo-checkbox"], [1, "total"], ["mat-raised-button", "", "type", "submit", 2, "background", "hsla(106, 86%, 57%, 0.762)", 3, "click"], [1, "pl-lg-3"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pay Using Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Coin For Exchange :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_33_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Request Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_36_listener() { return ctx.onClickCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Add More Coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product ID: ", ctx.productdata.pid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Available BarterCoin:", ctx.barterCoins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pcoin, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], styles: [".btn-dialog-close[_ngcontent-%COMP%]{\n  \n  margin-left: 600px;\n  padding-top: 0px;\n}\n\n\n.center-wrapper[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 80%; \n  }\n\n\n.content[_ngcontent-%COMP%] { \n  margin: 0 auto;\n  max-width: 600px; \n }\n\n\n.description[_ngcontent-%COMP%] { \n  padding-right: 1rem;\n  width: 60%; }\n\n\n.total[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n\n\n.top-bar[_ngcontent-%COMP%], .bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before { background: rgb(180, 202, 251); }\n\n\n.bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 3px;\n  display: block;  }\n\n\n.bag-product[_ngcontent-%COMP%], .quantity-wrapper[_ngcontent-%COMP%], .total[_ngcontent-%COMP%]\n   {\n    display: flex;\n    justify-content: space-between; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBR0E7SUFDSSxlQUFlO0lBR2YsYUFBYTtJQUlMLHNCQUFzQjtJQUd0Qix1QkFBdUI7SUFDL0IsV0FBVztFQUNiOzs7QUFJRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7OztBQUlEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVUsRUFBRTs7O0FBR2QsU0FBUyxtQkFBbUIsRUFBRTs7O0FBRzlCOztxQkFFcUIsOEJBQThCLEVBQUU7OztBQUdyRDs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEdBQUc7OztBQUdqQjs7OztJQU1FLGFBQWE7SUFHUCw4QkFBOEIsRUFBRSIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idG4tZGlhbG9nLWNsb3Nle1xuICAvKiBtYXJnaW4tdG9wOiAxcHg7ICovXG4gIG1hcmdpbi1sZWZ0OiA2MDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuXG4uY2VudGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogODAlOyBcbiAgfVxuICBcbiAgXG5cbi5jb250ZW50IHsgXG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4OyBcbiB9XG5cblxuXG4uZGVzY3JpcHRpb24geyBcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgd2lkdGg6IDYwJTsgfVxuXG5cbi50b3RhbCB7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxuXG4udG9wLWJhcixcbi5iYWctaGVhZDo6YWZ0ZXIsXG4uYmFnLXRvdGFsOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2IoMTgwLCAyMDIsIDI1MSk7IH1cblxuXG4uYmFnLWhlYWQ6OmFmdGVyLFxuLmJhZy10b3RhbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBkaXNwbGF5OiBibG9jazsgIH1cblxuXG4gIC5iYWctcHJvZHVjdCxcbiAgLnF1YW50aXR5LXdyYXBwZXIsXG4gIC50b3RhbFxuICAgeyBcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-payment",
                templateUrl: "./payment.component.html",
                styleUrls: ["./payment.component.css"],
            }]
    }], function () { return [{ type: _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _update_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateDetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"] }, { type: _email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__["RecommedationService"] }]; }, null); })();


/***/ }),

/***/ "Ho9W":
/*!*******************************************!*\
  !*** ./src/app/update-details.service.ts ***!
  \*******************************************/
/*! exports provided: UpdateDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDetailsService", function() { return UpdateDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UpdateDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // baseUrl="http://localhost:8080";
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    update(registerObject, profileImage) {
        const dataObj = new FormData;
        dataObj.append('str', JSON.stringify(registerObject));
        dataObj.append('file', profileImage);
        return this.httpClient.put(this.baseUrl + "/userservice/users/update/add", dataObj);
    }
    getUserDetailByEmail(email) {
        return this.httpClient.get(this.baseUrl + "/userservice/users/user/" + email);
    }
    updateEmployee(employees, email) {
        return this.httpClient.put(this.baseUrl + "/userservice/users/update/" + `${email}`, employees);
    }
    update123(updateObj) {
        return this.httpClient.put(this.baseUrl + "/userservice/users/update/", updateObj);
    }
    getUserCoinByEmail(email) {
        return this.httpClient.get(this.baseUrl + "/userservice/users/user/" + email);
    }
    exchange(buyeremail, selleremail, coinOfProduct) {
        return this.httpClient.put(this.baseUrl + "/userservice/users/exchhange?buyeremail=" + buyeremail + "&selleremail=" + selleremail + "&newTotalCoins=" + coinOfProduct, {});
    }
    updatewithoutPicture(data) {
        return this.httpClient.put(this.baseUrl + "/userservice/users/update2/add", data);
    }
}
UpdateDetailsService.ɵfac = function UpdateDetailsService_Factory(t) { return new (t || UpdateDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UpdateDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdateDetailsService, factory: UpdateDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Htz6":
/*!*****************************************************!*\
  !*** ./src/app/component/productdetails/product.ts ***!
  \*****************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    // constructor(pid:number,pemail:string, pname:string,pcategory:string,plocation:string,pstatus:string, pdate:Date,pexchange:string,pcoin:number,desc:string,img:any){
    // this.pid=pid;
    // this.pemail=pemail;
    // this.pname=pname
    // this.pcategory=pcategory;
    // this.plocation=plocation;
    // this.pstatus=pstatus;
    // this.pdate=pdate;
    // this.pexchange=pexchange;
    // this.pcoin=pcoin;
    // this.desc=desc;
    // this.img=img;
    // };
    constructor() {
    }
}


/***/ }),

/***/ "JELU":
/*!****************************************************!*\
  !*** ./src/app/models/register-product/Product.ts ***!
  \****************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    // image:[byte];
    constructor() {
        this.pcategory = "";
        this.pname = "";
        this.desc = "";
        this.pdatepost = "";
        this.pexchangetype = "";
        this.pcoin = 0;
        this.pexchange = [""];
        this.pemail = "";
        this.pstate = "";
    }
}


/***/ }),

/***/ "JI1F":
/*!****************************************************************!*\
  !*** ./src/app/models/recommendation/incoming-product-data.ts ***!
  \****************************************************************/
/*! exports provided: IncomingProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingProductData", function() { return IncomingProductData; });
class IncomingProductData {
    constructor() {
    }
}


/***/ }),

/***/ "JsXI":
/*!**************************************!*\
  !*** ./src/app/user-registration.ts ***!
  \**************************************/
/*! exports provided: UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
class UserRegistration {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.age = "";
        this.gender = "";
        this.email = "";
        this.mobile = "";
        this.password = "";
        this.cpassword = "";
        this.street = "";
        this.city = "";
        this.state = "";
        this.pincode = "";
    }
}


/***/ }),

/***/ "LVDB":
/*!**************************************************!*\
  !*** ./src/app/transcations/model/userrating.ts ***!
  \**************************************************/
/*! exports provided: Userrating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userrating", function() { return Userrating; });
class Userrating {
}


/***/ }),

/***/ "LtsO":
/*!******************************************************************************!*\
  !*** ./src/app/productregsiteredbyuser/productregsiteredbyuser.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductregsiteredbyuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductregsiteredbyuserComponent", function() { return ProductregsiteredbyuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/product.service */ "6xnw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProductregsiteredbyuserComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductregsiteredbyuserComponent_div_9_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.productdetails(item_r1.pid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r1.pstatus == "NOTAVAILABLE" ? "rgb(183, 232, 189)" : "rgb(190, 190, 231)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.pname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", item_r1.pstatus == "NOTAVAILABLE" ? "visible" : "hidden");
} }
class ProductregsiteredbyuserComponent {
    constructor(httpClient, navservice, domSanitizer, router) {
        this.httpClient = httpClient;
        this.navservice = navservice;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.pro = [];
    }
    productdetails(productId) {
        console.log(productId);
        localStorage.setItem("productId", productId);
        this.router.navigate(["/navbar/productDetail"]);
    }
    ngOnInit() {
        this.navservice.getproduct(localStorage.getItem('loginEmail')).subscribe((data) => {
            this.pro = data;
            for (let i = 0; i < this.pro.length; i++) {
                this.pro[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data[i].image);
            }
        });
    }
}
ProductregsiteredbyuserComponent.ɵfac = function ProductregsiteredbyuserComponent_Factory(t) { return new (t || ProductregsiteredbyuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ProductregsiteredbyuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductregsiteredbyuserComponent, selectors: [["app-productregsiteredbyuser"]], decls: 10, vars: 1, consts: [[1, "row", "col-md-12", "col-lg-12", "col-sm-12", 2, "background-color", "rgb(190, 190, 231)", "border-radius", "6px"], [1, "col-4"], [1, "col-4", 2, "display", "contents"], [1, "container"], ["fxLayout", "col wrap", 1, "card-deck"], ["class", "row", "style", "flex-wrap: wrap;", 4, "ngFor", "ngForOf"], [1, "row", 2, "flex-wrap", "wrap"], [1, "col-md-3", "col-lg-4", "col-sm-12"], [1, "card", 2, "width", "15rem", "margin-top", "12px", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", "embed-responsive-item", 3, "src"], [1, "card-body"], [1, "card-title", 2, "text-transform", "capitalize"], [1, "card-text", 2, "color", "red", "text-align", "right"]], template: function ProductregsiteredbyuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registered Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductregsiteredbyuserComponent_div_9_Template, 9, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pro);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".card-img-top[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 15vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n@media only screen and (max-width: 767px) {\n    .media[_ngcontent-%COMP%] {\n          align-items: center !important;\n      }\n  }\n.card[_ngcontent-%COMP%]:hover {\n    border: 1px solid #e011bd;\n}\n.card[_ngcontent-%COMP%] {\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RyZWdzaXRlcmVkYnl1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJO1VBQ00sOEJBQThCO01BQ2xDO0VBQ0o7QUFHQTtJQUNFLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InByb2R1Y3RyZWdzaXRlcmVkYnl1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59ICovXG4uY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1dnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59ICAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLm1lZGlhIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIH0gXG5cbiAgXG4gIC5jYXJkOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTAxMWJkO1xufVxuXG4uY2FyZCB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2RkMjQ3NjsgKi9cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductregsiteredbyuserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productregsiteredbyuser',
                templateUrl: './productregsiteredbyuser.component.html',
                styleUrls: ['./productregsiteredbyuser.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Mdzc":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EmailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //baseUrl="http://localhost:8080";
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    emailnotification(details) {
        return this.httpClient.post(this.baseUrl + "/emailservice/sendMail", details);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "MvdQ":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "k3Qe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegisterUserComponent_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Email Id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_19_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_19_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
} }
function RegisterUserComponent_div_25_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_25_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field should have min of 5 char and 1 alphabet, 1 numeric and atleast 1 special char");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_25_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_25_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function RegisterUserComponent_div_31_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and confirm password should be same");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_31_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_31_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.value != _r5.value);
} }
class RegisterUserComponent {
    constructor(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.user = new _user_registration__WEBPACK_IMPORTED_MODULE_1__["UserRegistration"]();
        this.errorMessage = "";
        this.emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.passwordPattern = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}/);
    }
    ngOnInit() { }
    userRegister() {
        console.log(this.user);
        if (this.user.email == "" ||
            this.user.password == "" ||
            this.user.cpassword == "") {
            // this.errorMessage="Fields cannot be empty"
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Fields cannot be empty!",
            });
        }
        else if (this.user.password != this.user.cpassword) {
            console.log("password must be same");
        }
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Password Must Be Same",
        // });
        // this.errorMessage = "Password Must Be Same";
        else {
            this.registerService.registerUser(this.user).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Successfully done !!", "User is Registered ", "success");
            }, (error) => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "User Already Exist!",
            }));
            this.router.navigate(["/login"]);
        }
    }
}
RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) { return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterUserComponent, selectors: [["app-register-user"]], decls: 48, vars: 11, consts: [["type", "button", "routerLink", "", 1, "btn", "btn-light"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-12"], ["src", "assets/Objects.png", "width", "50", "height", "50", "alt", "", 1, "d-inline-block"], [1, "Title"], ["cols", "2", "rowHeight", "90vh"], [1, "fcontainer"], [1, "fitem", "item1"], ["src", "assets/r3.png", "alt", "img", "width", "90%", "height", "80%"], [1, "fitem", "item2"], [3, "ngSubmit"], ["myform", "ngForm"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["type", "email", "required", "required", "id", "email", "name", "email", "placeholder", "Enter Email ", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["email", "ngModel"], ["style", "color:red;", 4, "ngIf"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "password", "required", "required", "id", "password", "name", "password", "placeholder", "Enter Password ", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["password", "ngModel"], ["type", "password", "id", "cpassword", "required", "required", "name", "cpassword", "placeholder", "Enter confirm password ", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["cpassword", "ngModel"], [1, "form-check"], ["type", "checkbox", "value", "yes", "id", "accept", "required", "required", "name", "accept", 1, "form-check-input", "me-2", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["href", "#"], ["type", "submit", "name", "submit_reg", "value", "Sign Up", 1, "btn", "btn-success", "width:100px", 3, "disabled"], ["routerLink", "/login"], [2, "color", "red"], [4, "ngIf"]], template: function RegisterUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SwapSquad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterUserComponent_Template_form_ngSubmit_12_listener() { return ctx.userRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterUserComponent_div_19_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterUserComponent_div_25_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.cpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterUserComponent_div_31_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_33_listener($event) { return ctx.user.accept = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "By creating an account, you agree to our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " and our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("pattern", ctx.emailPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.touched || _r1.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("pattern", ctx.passwordPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.touched || _r3.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.cpassword)("pattern", ctx.passwordPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.touched || _r5.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.accept);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".fcontainer[_ngcontent-%COMP%]{\n\n  height: 100vh;\n  display: flex;\n  \n  \n  \n  \n  \n  flex-wrap: wrap; \n  \n  flex-flow: column wrap; \n  \n  \n}\n\n.fitem[_ngcontent-%COMP%]{\n  \n\n  \n  width: 50%;\n  height: 100%;\n}\n\n.item1[_ngcontent-%COMP%]{\n  flex:1 ;\n  \n   flex-shrink: 2; \n\n}\n\n.item2[_ngcontent-%COMP%]{\n  width: 40%;\n  height: 100%;\n  \n  \n}\n\n.Title[_ngcontent-%COMP%] {\n  font-family: 'Rubik Distressed', cursive;\n  font-size: 180%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3Qjs7NEJBRTBCO0VBQzFCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isc0JBQXNCOzs7QUFHeEI7O0FBRUE7Ozs7RUFJRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtHQUNqQixjQUFjOztBQUVqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCIiwiZmlsZSI6InJlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mY29udGFpbmVye1xuXG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTsgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cbiAgZmxleC13cmFwOiB3cmFwOyBcbiAgLyogZmxleC13cmFwOiB3cmFwLXJldmVyc2U7ICovXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7IFxuICBcbiAgXG59XG5cbi5maXRlbXtcbiAgXG5cbiAgXG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLml0ZW0xe1xuICBmbGV4OjEgO1xuICAvKiBmbGV4LWdyb3c6IDM7ICovXG4gICBmbGV4LXNocmluazogMjsgXG5cbn1cblxuLml0ZW0ye1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGZsZXgtZ3JvdzogMjsgKi9cbiAgXG59XG4uVGl0bGUge1xuICBmb250LWZhbWlseTogJ1J1YmlrIERpc3RyZXNzZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE4MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-register-user",
                templateUrl: "./register-user.component.html",
                styleUrls: ["./register-user.component.css"],
            }]
    }], function () { return [{ type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Q6yC":
/*!****************************************!*\
  !*** ./src/app/transaction.service.ts ***!
  \****************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TransactionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //  baseUrl="http://localhost:8080";
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    saveTransaction(transaction) {
        return this.httpClient.post(this.baseUrl + "/transactionservice/addTransaction", transaction);
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QEFn":
/*!****************************************************************************!*\
  !*** ./src/app/recommendation-service/recommendation-service.component.ts ***!
  \****************************************************************************/
/*! exports provided: RecommendationServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationServiceComponent", function() { return RecommendationServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_recommendation_incoming_product_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/recommendation/incoming-product-data */ "JI1F");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/recommendation-service/recommedation.service */ "SBgC");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");















function RecommendationServiceComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.value)("selected", ctx_r0.selectedState === option_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.viewValue, "");
} }
function RecommendationServiceComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option1_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option1_r4.value)("selected", ctx_r1.selectedCategory === option1_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option1_r4.viewValue);
} }
function RecommendationServiceComponent_mat_card_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendationServiceComponent_mat_card_26_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const a_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.recommendation(a_r5.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", a_r5.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("MODE OF EXCHANGE : ", a_r5.pexchangetype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r5.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r5.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r5.pdatepost.substring(0, 10));
} }
class RecommendationServiceComponent {
    constructor(httpClient, _recommendationService, domSanitizer, router) {
        this.httpClient = httpClient;
        this._recommendationService = _recommendationService;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.title = 'Ip-geolocation';
        this.searchKey = "";
        this.searchTerm = '';
        this.abc = [];
        this.getproduct = [];
        this.states = [
            { value: '', viewValue: '' },
            { value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh' },
            { value: 'Assam', viewValue: 'Assam' },
            { value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh' },
            { value: 'Bihar', viewValue: 'Bihar' },
            { value: 'Chhattisgarh', viewValue: 'Chhattisgarh' },
            { value: 'Goa', viewValue: 'Goa' },
            { value: 'Gujarat', viewValue: 'Gujarat' },
            { value: 'Haryana', viewValue: 'Haryana' },
            { value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh' },
            { value: 'Jharkhand', viewValue: 'Jharkhand' },
            { value: 'Karnataka', viewValue: 'Karnataka' },
            { value: 'Kerala', viewValue: 'Kerala' },
            { value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh' },
            { value: 'Maharashtra', viewValue: 'Maharashtra' },
            { value: 'Manipur', viewValue: 'Manipur' },
            { value: 'Meghalaya', viewValue: 'Meghalaya' },
            { value: 'Nagaland', viewValue: 'Nagaland' },
            { value: 'Odisha', viewValue: 'Odisha' }
        ];
        this.selectedState = this.states[0].value;
        this.categories = [
            { value: '', viewValue: '' },
            { value: 'Mobiles', viewValue: 'Mobiles' },
            { value: 'Automobiles', viewValue: 'Automobiles' },
            { value: 'Electronics', viewValue: 'Electronics' },
            { value: 'Fashion', viewValue: 'Fashion' },
            { value: 'Appliances', viewValue: 'Appliances' },
            { value: 'Furnitures', viewValue: 'Furnitures' }
        ];
        this.selectedCategory = this.categories[0].value;
        this.recommendObj = new _models_recommendation_incoming_product_data__WEBPACK_IMPORTED_MODULE_3__["IncomingProductData"]();
        this.recommendationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    selectState(event) {
        this.selectedState = event.target.value;
        if (!this.selectedCategory) {
            return this._recommendationService.getProductRecommendationsByLocation(this.selectedState).subscribe(data => {
                this.abc = data;
                console.log(this.abc);
                this.abc.map(image => {
                    console.log(image);
                    image.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:productImage/" + "jpg" + ";base64," + image.productImage);
                });
            });
        }
        else {
            this._recommendationService.getgetProductRecommendationByStateAndCategory(this.selectedState, this.selectedCategory).subscribe(data => {
                this.abc = data;
                console.log(this.abc);
                this.abc.map(image => {
                    console.log(image);
                    image.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:productImage/" + "jpg" + ";base64," + image.productImage);
                });
            });
        }
    }
    selectCategory(event) {
        this.selectedCategory = event.target.value;
        console.log(this.selectedState);
        if (!this.selectedState) {
            return this._recommendationService.getgetProductByCategory(this.selectedCategory).subscribe(data => {
                this.abc = data;
                console.log(this.abc);
                this.abc.map(image => {
                    console.log(image);
                    image.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:productImage/" + "jpg" + ";base64," + image.productImage);
                });
            });
        }
        else {
            this._recommendationService.getgetProductRecommendationByStateAndCategory(this.selectedState, this.selectedCategory).subscribe(data => {
                this.abc = data;
                console.log(this.abc);
                this.abc.map(image => {
                    console.log(image);
                    image.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:productImage/" + "jpg" + ";base64," + image.productImage);
                });
            });
        }
    }
    ngOnInit() {
        this._recommendationService.getAllProduct().subscribe((data) => {
            console.log("data", data);
            for (let i = data.length - 1; i >= 0; i--) {
                this.abc.push(data[i]);
            }
            this.abc.map(image => {
                console.log(image);
                image.productImage = this.domSanitizer.bypassSecurityTrustResourceUrl("data:productImage/" + "jpg" + ";base64," + image.productImage);
            });
            console.log(this.abc);
        });
    }
    onSelect() {
        console.log(this.recommendationForm.value);
        this.recommendObj.city = this.recommendationForm.value.city;
        this.recommendObj.productCategory = this.recommendationForm.value.productCategory;
        this.recommendObj.state = this.recommendationForm.value.state;
    }
    // for Search bar
    search(event) {
        this.searchTerm = event.target.value;
        console.log(this.searchTerm);
    }
    loadUserInfo() {
        this.httpClient.get('https://jsonip.com/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((value) => {
            this.userIP = value.ip;
            let url = 'http://api.ipstack.com/${value.ip}?access_key=3def43850ecd7df03e512b3e1164df75';
            return this.httpClient.get('url');
        }))
            .subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    recommendation(productId) {
        console.log(productId);
        localStorage.setItem("productId", productId);
        this.router.navigate(["/navbar/productDetail"]);
    }
}
RecommendationServiceComponent.ɵfac = function RecommendationServiceComponent_Factory(t) { return new (t || RecommendationServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_5__["RecommedationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RecommendationServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendationServiceComponent, selectors: [["app-recommendation-service"]], decls: 27, vars: 4, consts: [[3, "formGroup"], [1, "total-content"], [1, "row", "nav-items"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-4"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-3"], [1, "col-lg-7", "col-md-7", "col-sm-7", "col-7", "location-dropdown"], ["appearance", "outline", 2, "inline-size", "auto"], [1, "fa-solid", "fa-location-dot", 2, "margin-right", "0.5rem"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-8"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-3", "category-dropdown"], ["appearance", "outline"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutAlign", "left", "fxLayoutGap", "2%"], ["class", "example-card", "fxFlex", "23%", "fxLayoutGap", "2%", 3, "click", 4, "ngFor", "ngForOf"], [3, "value", "selected"], ["fxFlex", "23%", "fxLayoutGap", "2%", 1, "example-card", 3, "click"], ["mat-card-image", "", 2, "height", "15rem", 3, "src"], [2, "color", "rgb(132, 20, 124)"], [1, "addres_data"]], template: function RecommendationServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RecommendationServiceComponent_Template_select_change_11_listener($event) { return ctx.selectState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecommendationServiceComponent_option_13_Template, 2, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RecommendationServiceComponent_Template_select_change_21_listener($event) { return ctx.selectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RecommendationServiceComponent_option_23_Template, 2, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecommendationServiceComponent_mat_card_26_Template, 12, 5, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recommendationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abc);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"]], styles: [".nav-items[_ngcontent-%COMP%]{\n    display: flex;\n    border: 0.5px solid rgb(3, 232, 248);\n    padding-bottom: -1rem;\n    padding-top: 0rem;\n    background-color: azure;\n\n    max-width: 110%;\n    \n}\n\n.title[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    justify-items: center;\n}\n\n.location-dropdown[_ngcontent-%COMP%]{\n    display: flex;\n\n     padding-top: 5px; \n\n   \n}\n\n.category-dropdown[_ngcontent-%COMP%]{\n    display: flex;\n\n    padding-top: 5px; \n    \n}\n\n.product-grid[_ngcontent-%COMP%]{\n\n    margin-top: -1rem;\n   \n}\n\n.first-product-grid[_ngcontent-%COMP%]{\n\n    height: 10rem;\n}\n\n.second-product-grid[_ngcontent-%COMP%]{\n    height: 15rem;\n}\n\n.First_row[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-evenly;\n    width: 1200px;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\nwidth: 250px;\n}\n\n.box[_ngcontent-%COMP%]   image[_ngcontent-%COMP%]:hover{\n    border: 2px solid rgb(233, 80, 10);\n}\n\n.box[_ngcontent-%COMP%]{\n    border: 1px solid rgb(8, 236, 236);\n    width: 260px;\n    min-height: 270px;\n    cursor: pointer;\n}\n\n.box[_ngcontent-%COMP%]:hover{\n    border: 2px solid rgb(81, 7, 155);\n}\n\n.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n\n.box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    padding: 4px 0 0 20px;\n}\n\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    padding: 0 0 10px 20px ;\n    color: #6f8a94;\n    font-size: 14px;\n}\n\n.addres_data[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n}\n\n.addres_data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 11px;\n    margin-right: 10px;\n}\n\n.LOde_more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    margin: 50px auto;\n    padding: 8px 16px ;\n    border-radius: 6px;\n    background-color: white;\n    cursor: pointer;\n    font-size: 16px;\n    display: block;\n    transition: all 0.5s;\n    border: 2px solid black;\n}\n\n.LOde_more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n    border: 4px solid black;\n}\n\n#lode_more_products_id[_ngcontent-%COMP%]{\n   display: none;\n}\n\n*[_ngcontent-%COMP%]{\n    margin: 0%;\n    padding: 0%;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\n.example-card[_ngcontent-%COMP%] {\n    \n    border: 1px solid rgb(8, 236, 236);\n    margin-top: 12px;\n   \n    \n    \n  }\n\n.example-card[_ngcontent-%COMP%]:hover{\n    border: 2px solid rgb(81, 7, 155);\n}\n\n.content[_ngcontent-%COMP%] {\n    padding: 16px;\n    align-items: flex-start;\n    margin-left: 25px;\n    margin-top: 5px;\n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGF0aW9uLXNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix1QkFBdUI7O0lBRXZCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTs7S0FFWixnQkFBZ0I7OztBQUdyQjs7QUFDQTtJQUNJLGFBQWE7O0lBRWIsZ0JBQWdCOztBQUVwQjs7QUFDQTs7SUFFSSxpQkFBaUI7O0FBRXJCOztBQUNBOztJQUVJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFHQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0dBQ0csYUFBYTtBQUNoQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlDQUF5Qzs7QUFFN0M7O0FBQ0E7O0lBRUksa0NBQWtDO0lBQ2xDLGdCQUFnQjs7OztFQUlsQjs7QUFDQTtJQUNFLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7OztBQUduQiIsImZpbGUiOiJyZWNvbW1lbmRhdGlvbi1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAudG90YWwtY29udGVudHtcbiAgIFxufSAqL1xuXG4ubmF2LWl0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMywgMjMyLCAyNDgpO1xuICAgIHBhZGRpbmctYm90dG9tOiAtMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcblxuICAgIG1heC13aWR0aDogMTEwJTtcbiAgICBcbn1cblxuLnRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9jYXRpb24tZHJvcGRvd257XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICBwYWRkaW5nLXRvcDogNXB4OyBcblxuICAgXG59XG4uY2F0ZWdvcnktZHJvcGRvd257XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHBhZGRpbmctdG9wOiA1cHg7IFxuICAgIFxufVxuLnByb2R1Y3QtZ3JpZHtcblxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgXG59XG4uZmlyc3QtcHJvZHVjdC1ncmlke1xuXG4gICAgaGVpZ2h0OiAxMHJlbTtcbn1cbi5zZWNvbmQtcHJvZHVjdC1ncmlke1xuICAgIGhlaWdodDogMTVyZW07XG59XG5cbi5GaXJzdF9yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJveCBpbWd7XG53aWR0aDogMjUwcHg7XG59XG4uYm94IGltYWdlOmhvdmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzMsIDgwLCAxMCk7XG59XG5cblxuLmJveHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOCwgMjM2LCAyMzYpO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm94OmhvdmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4MSwgNywgMTU1KTtcbn1cbi5ib3ggYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmJveCBoNHtcbiAgICBwYWRkaW5nOiA0cHggMCAwIDIwcHg7XG59XG4uYm94IHB7XG4gICAgcGFkZGluZzogMCAwIDEwcHggMjBweCA7XG4gICAgY29sb3I6ICM2ZjhhOTQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFkZHJlc19kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWRkcmVzX2RhdGEgcHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLkxPZGVfbW9yZSBidXR0b257XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDE2cHggO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuLkxPZGVfbW9yZSBidXR0b246aG92ZXJ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG59XG4jbG9kZV9tb3JlX3Byb2R1Y3RzX2lke1xuICAgZGlzcGxheTogbm9uZTtcbn1cbip7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOCwgMjM2LCAyMzYpO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICBcbiAgICBcbiAgICBcbiAgfVxuICAuZXhhbXBsZS1jYXJkOmhvdmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4MSwgNywgMTU1KTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIFxuICAgIFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommendation-service',
                templateUrl: './recommendation-service.component.html',
                styleUrls: ['./recommendation-service.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_5__["RecommedationService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "SBgC":
/*!**************************************************************************!*\
  !*** ./src/app/services/recommendation-service/recommedation.service.ts ***!
  \**************************************************************************/
/*! exports provided: RecommedationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommedationService", function() { return RecommedationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RecommedationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private url: string ="http://localhost:8080"
        this.url = "https://swapsquad.stackroute.io";
    }
    //   IncomingProductData(city:Location,category:Category): Observable<Object> {
    //     console.log(city,category);
    //     return this.httpClient.post(`${this.url}`,"city" + "category");
    //  }
    getProductRecommendationsByLocation(state) {
        return this.httpClient.get(this.url + "/recommendationservice/recommend/" + state);
    }
    getgetProductRecommendationByStateAndCategory(state, category) {
        return this.httpClient.get(this.url + "/recommendationservice/recommendCategory" + '?state=' + state + '&category=' + category);
    }
    getgetProductByCategory(category) {
        return this.httpClient.get(this.url + "/recommendationservice/Product" + '?category=' + category);
    }
    getAllProduct() {
        return this.httpClient.get(this.url + "/recommendationservice/getAllProduct");
    }
    deleteproductbyId(productId) {
        return this.httpClient.delete(this.url + "/recommendationservice/delete/" + productId);
    }
}
RecommedationService.ɵfac = function RecommedationService_Factory(t) { return new (t || RecommedationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RecommedationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecommedationService, factory: RecommedationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommedationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'webapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "T9SP":
/*!****************************************************************!*\
  !*** ./src/app/component/productdetails/userrating.service.ts ***!
  \****************************************************************/
/*! exports provided: UserratingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserratingService", function() { return UserratingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserratingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private baseurl: string = "http://localhost:8080"
        this.baseurl = "https://swapsquad.stackroute.io";
    }
    //get method for obtainig user ratings and reviews
    getUserRatingByEmail(email) {
        return this.httpClient.get(this.baseurl + "/userservice/users/user/" + email);
    }
}
UserratingService.ɵfac = function UserratingService_Factory(t) { return new (t || UserratingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserratingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserratingService, factory: UserratingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserratingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XXEo":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // baseUrl="http://localhost:8080"
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    loginUser(user) {
        console.log("user", user);
        return this.httpClient.post(this.baseUrl + "/authenticationservice/validate", user);
    }
    validate(user) {
        return this.httpClient.get(this.baseUrl + "/authenticationservice/validate", user);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _component_register_product_register_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/register-product/register-product.component */ "ZWJv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _component_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/productdetails/productdetails.component */ "9fun");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-user/register-user.component */ "MvdQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _recommendation_service_recommendation_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recommendation-service/recommendation-service.component */ "QEFn");
/* harmony import */ var _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/productdetails/product-details.service */ "+Jk2");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _update_details_update_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./update-details/update-details.component */ "zTWJ");
/* harmony import */ var _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transcations/transcations.component */ "czv8");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "kMBp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/accountdata/accountdata.component */ "1pwt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./payment/payment.component */ "DI59");
/* harmony import */ var _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/chat/chat.component */ "/e34");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/filter.pipe */ "j5uH");
/* harmony import */ var _payment2_payment2_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./payment2/payment2.component */ "7uET");
/* harmony import */ var _payment3_payment3_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./payment3/payment3.component */ "hFLO");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _productregsiteredbyuser_productregsiteredbyuser_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./productregsiteredbyuser/productregsiteredbyuser.component */ "LtsO");


































// If You are getting error then install ( npm i ng-starrating )

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_33__["RatingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_register_product_register_product_component__WEBPACK_IMPORTED_MODULE_5__["RegisterProductComponent"],
        _component_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_7__["ProductdetailsComponent"],
        _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_8__["RegisterUserComponent"],
        _recommendation_service_recommendation_service_component__WEBPACK_IMPORTED_MODULE_10__["RecommendationServiceComponent"],
        _update_details_update_details_component__WEBPACK_IMPORTED_MODULE_29__["UpdateDetailsComponent"],
        _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_30__["TranscationsComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_31__["MyProfileComponent"],
        _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_34__["AccountdataComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_36__["PaymentComponent"],
        _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_37__["ChatComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_31__["MyProfileComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_39__["NavbarComponent"],
        _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_43__["FilterPipe"],
        _payment2_payment2_component__WEBPACK_IMPORTED_MODULE_44__["Payment2Component"],
        _payment3_payment3_component__WEBPACK_IMPORTED_MODULE_45__["Payment3Component"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_46__["LoginComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_47__["LandingPageComponent"],
        _productregsiteredbyuser_productregsiteredbyuser_component__WEBPACK_IMPORTED_MODULE_48__["ProductregsiteredbyuserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_33__["RatingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_register_product_register_product_component__WEBPACK_IMPORTED_MODULE_5__["RegisterProductComponent"],
                    _component_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_7__["ProductdetailsComponent"],
                    _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_8__["RegisterUserComponent"],
                    _recommendation_service_recommendation_service_component__WEBPACK_IMPORTED_MODULE_10__["RecommendationServiceComponent"],
                    _update_details_update_details_component__WEBPACK_IMPORTED_MODULE_29__["UpdateDetailsComponent"],
                    _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_30__["TranscationsComponent"],
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_31__["MyProfileComponent"],
                    _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_34__["AccountdataComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_36__["PaymentComponent"],
                    _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_37__["ChatComponent"],
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_31__["MyProfileComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_39__["NavbarComponent"],
                    _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_43__["FilterPipe"],
                    _payment2_payment2_component__WEBPACK_IMPORTED_MODULE_44__["Payment2Component"],
                    _payment3_payment3_component__WEBPACK_IMPORTED_MODULE_45__["Payment3Component"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_46__["LoginComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_47__["LandingPageComponent"],
                    _productregsiteredbyuser_productregsiteredbyuser_component__WEBPACK_IMPORTED_MODULE_48__["ProductregsiteredbyuserComponent"],
                ],
                entryComponents: [
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_36__["PaymentComponent"],
                    _payment2_payment2_component__WEBPACK_IMPORTED_MODULE_44__["Payment2Component"],
                    _payment3_payment3_component__WEBPACK_IMPORTED_MODULE_45__["Payment3Component"],
                    _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_34__["AccountdataComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"],
                    ng_starrating__WEBPACK_IMPORTED_MODULE_33__["RatingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_41__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                ],
                providers: [_component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZWJv":
/*!**************************************************************************!*\
  !*** ./src/app/component/register-product/register-product.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProductComponent", function() { return RegisterProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _models_register_product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/register-product/Product */ "JELU");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_register_product_service_register_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/register-product-service/register-product.service */ "zetS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
























function RegisterProductComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Fill the Product Name* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Should be min. 2 Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Fill Date in Proper Format* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_label_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "If Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_mat_form_field_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Fill Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Should be min. 10 Characters* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Should be max. 350 Characters* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Upload Image* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_label_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_138_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_138_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only Numeric Value* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_138_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reached 10 million* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_138_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterProductComponent_div_138_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterProductComponent_div_138_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterProductComponent_div_138_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegisterProductComponent_div_138_mat_form_field_6_Template, 4, 0, "mat-form-field", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.productForm.controls["pcoin"].touched && ctx_r13.productForm.controls["pcoin"].invalid && (ctx_r13.productForm.controls["pcoin"].errors == null ? null : ctx_r13.productForm.controls["pcoin"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.productForm.controls["pcoin"].touched && ctx_r13.productForm.controls["pcoin"].invalid && (ctx_r13.productForm.controls["pcoin"].errors == null ? null : ctx_r13.productForm.controls["pcoin"].errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.productForm.controls["pcoin"].touched && ctx_r13.productForm.controls["pcoin"].invalid && (ctx_r13.productForm.controls["pcoin"].errors == null ? null : ctx_r13.productForm.controls["pcoin"].errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.coin);
} }
function RegisterProductComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} }
function RegisterProductComponent_label_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_141_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_141_mat_form_field_3_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterProductComponent_div_141_mat_form_field_3_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function RegisterProductComponent_div_141_mat_form_field_3_mat_chip_3_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const fruit_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.remove(fruit_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterProductComponent_div_141_mat_form_field_3_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruit_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r25.selectable)("removable", ctx_r25.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r26, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.removable);
} }
function RegisterProductComponent_div_141_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", 102, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterProductComponent_div_141_mat_form_field_3_mat_chip_3_Template, 3, 4, "mat-chip", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function RegisterProductComponent_div_141_mat_form_field_3_Template_input_matChipInputTokenEnd_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.fruitControls.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r24)("matChipInputSeparatorKeyCodes", ctx_r23.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r23.addOnBlur);
} }
function RegisterProductComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterProductComponent_div_141_span_2_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterProductComponent_div_141_mat_form_field_3_Template, 5, 4, "mat-form-field", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.productForm.controls["pcoin"].touched && ctx_r16.productForm.controls["pcoin"].invalid && (ctx_r16.productForm.controls["pcoin"].errors == null ? null : ctx_r16.productForm.controls["pcoin"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.preference);
} }
function RegisterProductComponent_span_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterProductComponent {
    constructor(productService, sanitizer, fb, router) {
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.fb = fb;
        this.router = router;
        this.pemail = localStorage.getItem("loginEmail");
        this.productObj = new _models_register_product_Product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.file = [];
        // For adding the category
        this.othercatergory = false;
        // for adding the coin and preference
        this.coin = false;
        this.preference = false;
        this.blankspace = true;
        // for chips
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            pdatepost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(350)]),
            pexchangetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            // pcoin: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(8)]),
            // pexchange: this.fb.array([], Validators.required),
            pcoin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]),
            pexchange: this.fb.array([]),
            // pemail: new FormControl(),
            pstate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.futureDateDisable();
    }
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
    prepareFilesList(files) {
        for (const item of files) {
            item.progress = 0;
            this.file.push(item);
        }
        this.uploadFilesSimulator(0);
    }
    uploadFilesSimulator(index) {
        setTimeout(() => {
            if (index === this.file.length) {
                return;
            }
            else {
                const progressInterval = setInterval(() => {
                    if (this.file[index].progress === 100) {
                        clearInterval(progressInterval);
                        this.uploadFilesSimulator(index + 1);
                    }
                    else {
                        this.file[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    }
    onClickSubmitForm() {
        if (!this.productForm.invalid) {
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
            this.productObj.pemail = localStorage.getItem('loginEmail');
            this.productService.addProduct(this.productObj, this.file[0]).subscribe(data => console.log(data));
            // To reset the form
            this.productForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({ icon: 'success', title: 'Successfully Registered !!', text: 'Your Product Posted Succesfully !', });
            //To navigate to home page
            this.router.navigateByUrl('/navbar/recommendation-service');
        }
        // else{
        //   Swal.fire({ icon: 'error', title: 'Oops...Empty Feild !!', text: 'Please fill all sections the to continue !', })
        // }
    }
    show(x) {
        if (x === 1) {
            this.othercatergory = false;
        }
        else if (x === 2) {
            this.othercatergory = true;
        }
    }
    text(x) {
        if (x == 0) {
            this.coin = true;
            this.preference = false;
            this.productForm.controls['pexchange'].reset();
        }
        else if (x == 1) {
            this.preference = true;
            this.coin = false;
            this.blankspace = false;
            this.productForm.controls['pcoin'].reset();
        }
        else if (x == 2) {
            this.coin = true;
            this.preference = true;
            this.blankspace = true;
        }
    }
    get fruitControls() {
        return this.productForm.controls.pexchange;
    }
    add(event) {
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
    remove(fruit) {
        const index = this.fruitControls.value.indexOf(fruit);
        if (index >= 0) {
            this.fruitControls.removeAt(index);
        }
    }
    futureDateDisable() {
        var date = new Date();
        var todayDate = date.getDate();
        var month = date.getMonth() + 1;
        console.log(todayDate);
        console.log(month);
        var year = date.getFullYear();
        if (todayDate < 10) {
            // '0' +9=09
            todayDate = '0' + todayDate;
        }
        if (month < 10) {
            month = '0' + month;
        }
        console.log(year);
        this.maxDate = year + "-" + month + "-" + todayDate;
        console.log(this.maxDate);
    }
}
RegisterProductComponent.ɵfac = function RegisterProductComponent_Factory(t) { return new (t || RegisterProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_product_service_register_product_service__WEBPACK_IMPORTED_MODULE_5__["RegisterProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RegisterProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterProductComponent, selectors: [["app-register-product"]], decls: 222, vars: 20, consts: [[3, "formGroup"], ["stepper", ""], [1, "body"], ["label", "Step 1", "state", "phone"], [1, "row"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-1"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-10"], [1, "mat-custom-card"], [1, "card-header", "card-custom-header"], [1, "card-category", "card-title", "h1", "header-card-text"], [1, "form-horizontal", "horizontal-card-form"], [1, "col-lg-2", "col-md-2"], [1, "col-lg-9", "col-md-9"], ["class", "small", "style", "color: red", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [1, "col-lg-1", "col-md-1"], [1, "col-lg-2", "col-md-2", "labelname"], ["appearance", "outline", 1, "col-lg-9", "col-md-9"], ["matInput", "", "formControlName", "pname"], [1, "col-md-2"], [1, "col-md-3"], [1, "col-md-1"], [1, "col-md-2", "labelname"], ["appearance", "outline", 1, "col-md-3"], ["formControlName", "pcategory", "ngDefaultControl", ""], [3, "click"], ["value", "Mobiles"], ["value", "Automobiles"], ["value", "Electronics"], ["value", "Fashion"], ["value", "Appliances"], ["value", "Furnitures"], ["matInput", "", "type", "date", "formControlName", "pdatepost", 3, "max"], ["picker", ""], ["class", "col-md-2 labelname", 4, "ngIf"], ["class", "col-md-3", "appearance", "outline", 4, "ngIf"], [1, "col-md-7"], [1, "col-md-10"], ["appearance", "outline", 1, "col-md-10"], ["matInput", "", "formControlName", "desc"], [1, "step3-mat-custom-card"], [1, "card-header", "step3-card-custom-header", "col-md-2"], [1, "card-category", "card-title", "h6", "step3-header-card-text"], [1, "container", "col-md-12"], ["type", "file", "formControlName", "image", 3, "change"], ["cols", "8", "rowHeight", "1:1"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-10", "step-one-next-btn"], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["label", "Step 2", "state", "chat"], [1, "col-lg-2", "payment-mode-message"], [1, "small"], [1, "col-lg-10"], [1, "col-md-2", "step2-labelname"], ["aria-label", "Select an option", "formControlName", "pexchangetype", "ngDefaultControl", "", 1, "col-md-7"], ["value", "COIN", 1, "col-md-4", 3, "click"], [1, "fa-solid", "fa-coins", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], ["value", "BARTER", 1, "col-md-4", 3, "click"], [1, "fa-solid", "fa-right-left", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], ["value", "BOTH", 1, "col-md-4", 3, "click"], [1, "fa-solid", "fa-right-left", 2, "margin-left", "0.5rem"], [1, "row", 2, "margin-top", "1rem"], ["class", "col-md-3", 4, "ngIf"], ["class", "col-md-1", 4, "ngIf"], [1, "col-lg-2"], [1, "small", "user-detail"], ["matInput", "", "placeholder", "", "readonly", ""], ["class", "small", ",", "", "style", "color: red", 4, "ngIf"], ["appearance", "outline", 1, "col-md-12"], [1, "fa-solid", "fa-location-dot", 2, "margin-right", "0.5rem"], ["formControlName", "pstate", "ngDefaultControl", ""], ["value", "Andhra Pradesh"], ["value", "Assam"], ["value", "Arunachal Pradesh"], ["value", "Bihar"], ["value", "Chhattisgarh"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Nagaland"], ["value", "Odisha"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-5", "step-one-back-btn"], ["mat-raised-button", "", "matStepperPrevious", "", "color", "primary"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-5", "step-one-next-btn"], ["mat-raised-button", "", "type", "submit", 2, "background", "#43db52", 3, "disabled", "click"], [1, "small", 2, "color", "red"], [2, "color", "red"], ["matInput", ""], [1, "col-lg-12"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "formControlName", "pcoin"], [1, "col-md-12"], ["class", "example-chip-list", "class", "col-md-12", "appearance", "outline", 4, "ngIf"], [",", "", 1, "small", 2, "color", "red"], ["aria-label", "Fruit selection", "formArrayName", "pexchange"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function RegisterProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Register Your Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterProductComponent_span_16_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterProductComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterProductComponent_span_29_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterProductComponent_span_33_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterProductComponent_Template_div_click_41_listener() { return ctx.show(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mobiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Automobiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Electronics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Appliances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Furnitures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Purchase Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-datepicker", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RegisterProductComponent_label_65_Template, 2, 0, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RegisterProductComponent_mat_form_field_66_Template, 4, 0, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, RegisterProductComponent_span_75_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, RegisterProductComponent_span_76_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, RegisterProductComponent_span_77_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Upload Photos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, RegisterProductComponent_span_92_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterProductComponent_Template_input_change_94_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "mat-grid-list", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-step", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-card", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Mandatory* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Exchange Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-radio-group", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-radio-button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterProductComponent_Template_mat_radio_button_click_125_listener() { return ctx.text(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-radio-button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterProductComponent_Template_mat_radio_button_click_128_listener() { return ctx.text(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-radio-button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterProductComponent_Template_mat_radio_button_click_131_listener() { return ctx.text(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, RegisterProductComponent_label_137_Template, 2, 0, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, RegisterProductComponent_div_138_Template, 7, 4, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, RegisterProductComponent_div_139_Template, 1, 0, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, RegisterProductComponent_label_140_Template, 2, 0, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, RegisterProductComponent_div_141_Template, 4, 2, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Your Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Read Section Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Confirm Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, RegisterProductComponent_span_169_Template, 2, 0, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-form-field", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Place ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-select", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Andhra Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Assam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Arunachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Bihar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Chhattisgarh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Gujarat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Haryana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Himachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "mat-option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Jharkhand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Karnataka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Kerala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Madhya Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "mat-option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Manipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Meghalaya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Nagaland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Odisha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterProductComponent_Template_button_click_219_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Finish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["pname"].touched && ctx.productForm.controls["pname"].invalid && (ctx.productForm.controls["pname"].errors == null ? null : ctx.productForm.controls["pname"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["pname"].touched && ctx.productForm.controls["pname"].invalid && (ctx.productForm.controls["pname"].errors == null ? null : ctx.productForm.controls["pname"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["pcategory"].touched && ctx.productForm.controls["pcategory"].invalid && (ctx.productForm.controls["pcategory"].errors == null ? null : ctx.productForm.controls["pcategory"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["pdatepost"].touched && ctx.productForm.controls["pdatepost"].invalid && (ctx.productForm.controls["pdatepost"].errors == null ? null : ctx.productForm.controls["pdatepost"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.othercatergory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.othercatergory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["desc"].touched && ctx.productForm.controls["desc"].invalid && (ctx.productForm.controls["desc"].errors == null ? null : ctx.productForm.controls["desc"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["desc"].touched && ctx.productForm.controls["desc"].invalid && (ctx.productForm.controls["desc"].errors == null ? null : ctx.productForm.controls["desc"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["desc"].touched && ctx.productForm.controls["desc"].invalid && (ctx.productForm.controls["desc"].errors == null ? null : ctx.productForm.controls["desc"].errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["image"].touched && ctx.productForm.controls["image"].invalid && (ctx.productForm.controls["image"].errors == null ? null : ctx.productForm.controls["image"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blankspace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productForm.controls["pstate"].touched && ctx.productForm.controls["pstate"].invalid && (ctx.productForm.controls["pstate"].errors == null ? null : ctx.productForm.controls["pstate"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.productForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperNext"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipList"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipRemove"]], styles: [".body[_ngcontent-%COMP%] {\n  position: relative;\n  background: #F0ECEC;\n}\n\nbody[_ngcontent-%COMP%] {\n  position: relative;\n  background: #F0ECEC;\n}\n\n.example-form[_ngcontent-%COMP%] {\n\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.labelname[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  padding-top: 1rem;\n\n}\n\n.step2-labelname[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  margin-top: -35px !important;\n  background-color: #F24726;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n}\n\n.step3-card-custom-header[_ngcontent-%COMP%] {\n  margin-top: -27px !important;\n  background-color: #CCD5D5;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n}\n\n.header-card-text[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  margin-bottom: -1px;\n  color: white;\n}\n\n.step3-header-card-text[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  margin-bottom: -1px;\n  color: black;\n}\n\n.horizontal-card-form[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.step-one-next-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  margin-top: 1.5rem;\n}\n\n.step-one-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  margin-top: 1.5rem;\n}\n\n.mat-custom-card[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.step3-mat-custom-card[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n\n\n.form[_ngcontent-%COMP%] {\n  margin: 30px 0px 20px;\n  padding: 0px 50px;\n}\n\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #acacac;\n  font-size: 40px;\n  font-weight: 400;\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.1);\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  margin-top: -40px;\n  background: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  line-height: 40px;\n  font-size: 13px;\n  color: #f5f5f5;\n  font-weight: 600;\n}\n\n.form[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n\n}\n\n.btn-remove-image[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  width: 20px;\n  text-align: center;\n}\n\n.payment-mode-message[_ngcontent-%COMP%] {\n  display: flex;\n  color: red;\n  text-align: center;\n  justify-content: right;\n}\n\n.user-detail[_ngcontent-%COMP%] {\n  display: flex;\n  color: blue;\n  text-align: center;\n  justify-content: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBLEtBQUs7O0FBR0w7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLEtBQUs7O0FBR0w7RUFDRSxzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoicmVnaXN0ZXItcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGMEVDRUM7XG59XG5cbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGMEVDRUM7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxhYmVsbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuXG59XG5cbi5zdGVwMi1sYWJlbG5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4uY2FyZC1jdXN0b20taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogLTM1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNDcyNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0ZXAzLWNhcmQtY3VzdG9tLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IC0yN3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0Q1RDU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItY2FyZC10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDByZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0ZXAzLWhlYWRlci1jYXJkLXRleHQge1xuICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaG9yaXpvbnRhbC1jYXJkLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc3RlcC1vbmUtbmV4dC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5zdGVwLW9uZS1iYWNrLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4ubWF0LWN1c3RvbS1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnN0ZXAzLW1hdC1jdXN0b20tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cblxuLyogICovXG5cblxuLmZvcm0ge1xuICBtYXJnaW46IDMwcHggMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1MHB4O1xufVxuXG4uZm9ybSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvcm0gLmdyaWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG59XG5cbi5mb3JtIC5ncmlkIC5mb3JtLWVsZW1lbnQge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4xKTtcbn1cblxuLmZvcm0gLmdyaWQgLmZvcm0tZWxlbWVudCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtIC5ncmlkIC5mb3JtLWVsZW1lbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5mb3JtIC5ncmlkIC5mb3JtLWVsZW1lbnQgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtIC5ncmlkIC5mb3JtLWVsZW1lbnQgZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi8qICAqL1xuXG5cbm1hdC1ncmlkLXRpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuXG59XG5cbi5idG4tcmVtb3ZlLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBheW1lbnQtbW9kZS1tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4udXNlci1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-product',
                templateUrl: './register-product.component.html',
                styleUrls: ['./register-product.component.css'],
            }]
    }], function () { return [{ type: _services_register_product_service_register_product_service__WEBPACK_IMPORTED_MODULE_5__["RegisterProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();
function value(value) {
    throw new Error('Function not implemented.');
}
function index(index, arg1) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "cKIH":
/*!******************************************!*\
  !*** ./src/app/models/login/user-dao.ts ***!
  \******************************************/
/*! exports provided: UserDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDao", function() { return UserDao; });
class UserDao {
    constructor() { }
}


/***/ }),

/***/ "czv8":
/*!********************************************************!*\
  !*** ./src/app/transcations/transcations.component.ts ***!
  \********************************************************/
/*! exports provided: TranscationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranscationsComponent", function() { return TranscationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_userrating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/userrating */ "LVDB");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_tran_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/tran-service.service */ "BNPy");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-starrating */ "oaav");












function TranscationsComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tran_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tran_r2.value)("selected", ctx_r0.selectedValue === tran_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tran_r2.value);
} }
function TranscationsComponent_div_12_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TranscationsComponent_div_12_div_49_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onClickSubmit(_r5.value, item_r3.eemail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "star-rating", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rate", function TranscationsComponent_div_12_div_49_Template_star_rating_rate_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onRate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalstars", 5);
} }
function TranscationsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product/Coin Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product/Coin Gained");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Exchanger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Transaction Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email::");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mode of transaction:-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranscationsComponent_div_12_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Give Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TranscationsComponent_div_12_div_49_Template, 9, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.pcoin1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.pcoin2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.pname1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.pname2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.eemail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.method_of_Transaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.toDisplay);
} }
class TranscationsComponent {
    constructor(httpClient, transcationService, domSanitizer) {
        this.httpClient = httpClient;
        this.transcationService = transcationService;
        this.domSanitizer = domSanitizer;
        this.selectedValue = "Sold Products";
        this.stars = [false, false, false, false, false];
        this.transcations = [
            { value: 'Sold Products' },
            { value: 'Purchased Products' },
        ];
        this.transcat = [];
        this.a = null;
        this.usersemail = "";
        this.title = 'abc';
        this.car = "Car";
        this.name = "anupam";
        this.email = "abc@gmail.com";
        this.empList = [];
        this.currentRate = 8;
        this.rating = 1;
        this.reviews = "";
        this.rateings = new _model_userrating__WEBPACK_IMPORTED_MODULE_1__["Userrating"]();
        this.toDisplay = false;
    }
    rate(rating) {
        console.log('rating', rating);
        this.stars = this.stars.map((_, i) => rating > i);
        console.log('stars', this.stars);
    }
    selectCar(event) {
        this.selectedValue = event.target.value;
        console.log(this.selectedValue);
        if (this.selectedValue == 'Purchased Products') {
            this.tran = null;
            this.transcationService.getTranscationsByByerEmailId(this.useremail).subscribe((data) => {
                console.log("data", data);
                // for (let i = 0; i < data.length; i++) {
                // this.abc.push(data[i]);
                // }
                // console.log(this.abc);
                this.tran = data;
                console.log("tran", this.tran);
                for (let i = 0; i < this.tran.length; i++) {
                    this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data) => {
                        console.log("product", data);
                        this.abc = data;
                        // for (let i = 0; i < data.length; i++) {
                        // this.abc.push(data[i]);
                        // }
                        // console.log(this.abc);
                        this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                        this.tran[i].pcoin1 = this.tran[i].price_of_Product_in_coins;
                        this.tran[i].pname2 = this.abc.pname;
                        this.tran[i].pcategory2 = this.abc.pcategory;
                        this.tran[i].eemail = this.tran[i].sellerEmail;
                        this.tran[i].image2 = this.tran[i].image;
                        console.log("product", this.tran);
                    });
                    this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data) => {
                        console.log("product", data);
                        this.abc = data;
                        // for (let i = 0; i < data.length; i++) {
                        // this.abc.push(data[i]);
                        // }
                        // console.log(this.abc);
                        this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                        this.tran[i].pname1 = this.abc.pname;
                        this.tran[i].pcategory1 = this.abc.pcategory;
                        this.tran[i].image1 = this.tran[i].image;
                        console.log("product", this.tran);
                    });
                }
            });
        }
        else {
            this.tran = null;
            this.transcationService.getTranscationsBySellerEmailId(this.useremail).subscribe((data) => {
                console.log("data", data);
                // for (let i = 0; i < data.length; i++) {
                // this.abc.push(data[i]);
                // }
                // console.log(this.abc);
                this.tran = data;
                console.log("tran", this.tran);
                for (let i = 0; i < this.tran.length; i++) {
                    this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data) => {
                        console.log("product", data);
                        this.abc = data;
                        // for (let i = 0; i < data.length; i++) {
                        // this.abc.push(data[i]);
                        // }
                        // console.log(this.abc);
                        this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                        this.tran[i].pcoin2 = this.tran[i].price_of_Product_in_coins;
                        this.tran[i].pname1 = this.abc.pname;
                        this.tran[i].pcategory2 = this.abc.pcategory;
                        this.tran[i].eemail = this.tran[i].buyerEmail;
                        this.tran[i].image1 = this.tran[i].image;
                        console.log("product", this.tran);
                    });
                    this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data) => {
                        console.log("product", data);
                        this.abc = data;
                        // for (let i = 0; i < data.length; i++) {
                        // this.abc.push(data[i]);
                        // }
                        // console.log(this.abc);
                        this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                        this.tran[i].pname2 = this.abc.pname;
                        this.tran[i].pcategory1 = this.abc.pcategory;
                        this.tran[i].eemail = this.tran[i].buyerEmail;
                        this.tran[i].image2 = this.tran[i].image;
                        console.log("product", this.tran);
                    });
                }
            });
        }
    }
    onClickSubmit(data, email) {
        this.toDisplay = !this.toDisplay;
        console.log(this.rating, data.review, email);
        this.rateings.userId = this.useremail;
        this.rateings.reviews = data.review;
        this.rateings.rating = this.rating;
        console.log(this.rateings);
        this.transcationService.ratebyemail(this.rateings, email).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Successfully done ');
        }, error => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({ icon: 'error', title: 'Oops...', text: 'Error', }));
    }
    toggleData() {
        this.toDisplay = !this.toDisplay;
    }
    onRate($event) {
        this.rating = $event.newValue;
        console.log(this.rating);
    }
    ngOnInit() {
        this.useremail = localStorage.getItem('loginEmail');
        this.transcationService.getTranscationsBySellerEmailId(this.useremail).subscribe((data) => {
            console.log("data", data);
            // for (let i = 0; i < data.length; i++) {
            // this.abc.push(data[i]);
            // }
            // console.log(this.abc);
            this.tran = data;
            console.log("tran", this.tran);
            for (let i = 0; i < this.tran.length; i++) {
                this.transcationService.getProductByName(this.tran[i].productObtained).subscribe((data) => {
                    console.log("product", data);
                    this.abc = data;
                    // for (let i = 0; i < data.length; i++) {
                    // this.abc.push(data[i]);
                    // }
                    // console.log(this.abc);
                    this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                    this.tran[i].pcoin2 = this.tran[i].price_of_Product_in_coins;
                    this.tran[i].pname1 = this.abc.pname;
                    this.tran[i].pcategory2 = this.abc.pcategory;
                    this.tran[i].eemail = this.tran[i].buyerEmail;
                    this.tran[i].image1 = this.tran[i].image;
                    console.log("product", this.tran);
                });
                this.transcationService.getProductByName(this.tran[i].productSend).subscribe((data) => {
                    console.log("product", data);
                    this.abc = data;
                    // for (let i = 0; i < data.length; i++) {
                    // this.abc.push(data[i]);
                    // }
                    // console.log(this.abc);
                    this.tran[i].image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + data.image);
                    this.tran[i].pname2 = this.abc.pname;
                    this.tran[i].pcategory1 = this.abc.pcategory;
                    this.tran[i].eemail = this.tran[i].buyerEmail;
                    this.tran[i].image2 = this.tran[i].image;
                    console.log("product", this.tran);
                });
            }
        });
    }
}
TranscationsComponent.ɵfac = function TranscationsComponent_Factory(t) { return new (t || TranscationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_tran_service_service__WEBPACK_IMPORTED_MODULE_4__["TranServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
TranscationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TranscationsComponent, selectors: [["app-transcations"]], decls: 13, vars: 2, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "cont"], [1, "drop"], ["appearance", "outline", 2, "width", "400px", "border-color", "blue", "border-width", "5px"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "x", "col-xl-9", "col-lg-9", "col-md-12", "col-sm-6", "col-12"], [4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "a"], [2, "padding", "10px 0px 0px 20px", "position", "absolute"], [2, "padding", "10px 0px 0px 150px", "position", "absolute"], [2, "padding", "10px 0px 0px 400px", "position", "absolute"], [2, "padding", "10px 0px 0px 550px", "position", "absolute"], [2, "padding", "60px 0px 10px 180px", "position", "absolute", "text-transform", "capitalize"], ["sizes", "10px", "alt", ".", 2, "padding", "50px 0px 0px 20px", "height", "245px", "width", "150px", 3, "src"], ["sizes", "10px", "alt", ".", 2, "padding", "50px 0px 0px 250px", "height", "245px", "width", "33%", 3, "src"], [2, "padding", "60px 0px 10px 600px", "position", "absolute", "text-transform", "capitalize"], [2, "padding", "40px 5px 0px 700px", "position", "absolute"], [2, "padding", "80px 5px 0px 700px", "position", "absolute", "text-transform", "capitalize"], [2, "padding", "100px 5px 0px 700px", "position", "absolute"], [2, "padding", "140px 5px 0px 700px", "position", "absolute"], [2, "padding", "140px 5px 0px 840px", "position", "absolute", "text-transform", "capitalize"], [2, "padding", "20px 5px 0px 840px", "position", "absolute"], [2, "padding", "180px 5px 0px 750px", "position", "absolute"], [1, "btn", "btn-success", 3, "click"], ["style", "padding: 50px 5px 0px 400px;", 4, "ngIf"], [2, "padding", "50px 5px 0px 400px"], [3, "ngSubmit"], ["userlogin", "ngForm"], [1, "form-group"], ["name", "rating", "checkedcolor", "blue", "uncheckedcolor", "black", "size", "30px", "readonly", "false", 3, "value", "totalstars", "rate"], [1, "form-group", 2, "padding-top", "30px"], ["type", "text", "id", "exampleInputPassword1", "name", "review", "placeholder", "review", "ngModel", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"]], template: function TranscationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transcation Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TranscationsComponent_Template_select_change_8_listener($event) { return ctx.selectCar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TranscationsComponent_option_10_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TranscationsComponent_div_12_Template, 50, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transcations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tran);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_starrating__WEBPACK_IMPORTED_MODULE_10__["StarRatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".cont[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100%;\n}\n.a[_ngcontent-%COMP%]{\n  \n    width: 1200px;\n    display: flex;\n    border-radius: 25px;\n    height: 250px;\n    border: solid black ;\n    border-width: thin;\n    margin-top: 10px;\n    background-color: rgb(204, 255, 153);\n\n    \n  }\n.x[_ngcontent-%COMP%]{\n    margin-left: 40px;\n    margin-top: 100px;\n    position: absolute;\n  }\nimg[_ngcontent-%COMP%] {\n    \n    \n  \n  }\n\n.drop[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-top: 0px;\n    margin-left: 500px;\n  }\nspan[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    line-height: 25px;\n    text-align: center;\n    width: 25px;\n    \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBOztJQUVJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQ0FBb0M7OztFQUd0QztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFFQTs7OztFQUlBO0FBQ0E7O0tBRUc7QUFFSDtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBR0E7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVzs7O0VBR2IiLCJmaWxlIjoidHJhbnNjYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5he1xuICBcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDI1NSwgMTUzKTtcblxuICAgIFxuICB9XG4gIFxuICAueHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgXG4gICAgXG4gIFxuICB9XG4gIC8qIHB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9ICovXG4gIFxuICAuZHJvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcbiAgfVxuICBcbiAgXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIFxuICAgIFxuICB9XG5cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranscationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transcations',
                templateUrl: './transcations.component.html',
                styleUrls: ['./transcations.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _service_tran_service_service__WEBPACK_IMPORTED_MODULE_4__["TranServiceService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "e69g":
/*!********************************!*\
  !*** ./src/app/transaction.ts ***!
  \********************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
class Transaction {
    constructor() {
    }
}


/***/ }),

/***/ "hFLO":
/*!************************************************!*\
  !*** ./src/app/payment3/payment3.component.ts ***!
  \************************************************/
/*! exports provided: Payment3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment3Component", function() { return Payment3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/productdetails/product */ "Htz6");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction */ "e69g");
/* harmony import */ var _email_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../email-details */ "+2+J");
/* harmony import */ var _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/accountdata/accountdata.component */ "1pwt");
/* harmony import */ var _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/productdetails/product-details.service */ "+Jk2");
/* harmony import */ var _update_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update-details.service */ "Ho9W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../transaction.service */ "Q6yC");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../email.service */ "Mdzc");
/* harmony import */ var _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/recommendation-service/recommedation.service */ "SBgC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function Payment3Component_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pro_r1.pid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pro_r1.pname, " ");
} }
class Payment3Component {
    constructor(_productdetailsService, dialogRef, userservice, router, tranactionservice, emailservice, dialog, reccomservice) {
        this._productdetailsService = _productdetailsService;
        this.dialogRef = dialogRef;
        this.userservice = userservice;
        this.router = router;
        this.tranactionservice = tranactionservice;
        this.emailservice = emailservice;
        this.dialog = dialog;
        this.reccomservice = reccomservice;
        this.abc = [];
        this.finalcoin = 0;
        this.pid = 1001;
        this.pname = "One Plus 9r";
        this.desc = " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
        this.pcoin = 20000;
        this.pemail = "raju@gmail.com";
        this.pexchangetype = "exchange";
        this.barterCoins = 5000;
        // addcoin() {
        //   this.router.navigate(["payment"]);
        // }
        this.productObj = new _component_productdetails_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.userObj = new _user_registration__WEBPACK_IMPORTED_MODULE_5__["UserRegistration"]();
        this.transactionObj = new _transaction__WEBPACK_IMPORTED_MODULE_6__["Transaction"]();
        this.emailObj = new _email_details__WEBPACK_IMPORTED_MODULE_7__["EmailDetails"]();
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            pid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    ngOnInit() {
        this._productdetailsService
            .getProductDetailsByEmail(localStorage.getItem("loginEmail"))
            .subscribe((data) => {
            console.log("data", data);
            for (let i = 0; i < data.length; i++) {
                this.abc.push(data[i]);
            }
            this.productdata1 = data;
            this.pid = this.productdata1[0].pid;
            this.pemail = this.productdata1[0].pemail;
            this.pcoin = this.productdata1[0].pcoin;
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
            this.pexchangetype = this.productdata.pexchangetype;
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
    onClickCoin() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.restoreFocus = false;
        dialogConfig.width = "70%";
        dialogConfig.height = "75%";
        this.dialog.open(_component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_8__["AccountdataComponent"], dialogConfig);
    }
    onClickSubmitForm() {
        if (this.coindata.barterCoins < this.productdata.pcoin) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Insufficient Coin",
                text: "Please Add More Coin!",
            });
        }
        else {
            console.log(this.updateForm.value);
            this._productdetailsService
                .updateProductNotAvailable(this.productdata.pid)
                .subscribe((data) => console.log(data));
            this.productObj.pid = this.updateForm.value.pid;
            console.log(this.updateForm.value.pid);
            this._productdetailsService
                .updateProductNotAvailable(this.updateForm.value.pid)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Transaction  Unsuccessful!",
            });
            console.log(this.coindata.email);
            console.log(this.productdata.pemail);
            console.log(this.productdata.pcoin);
            console.log(this.productdata1[0].pcoin);
            this.finalcoin = this.productdata.pcoin - this.productdata1[0].pcoin;
            console.log(this.finalcoin);
            this.userservice
                .exchange(this.coindata.email, this.productdata.pemail, this.finalcoin)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Requested for Exchange!!",
                text: "Thank You!",
            });
            this.transactionObj.buyerEmail = this.productdata1[0].pemail;
            this.transactionObj.sellerEmail = this.productdata.pemail;
            this.transactionObj.productSend = this.productdata1[0].pid;
            this.transactionObj.productObtained = this.productdata.pid;
            this.transactionObj.method_of_Transaction = this.productdata.pexchangetype;
            this.transactionObj.price_of_Product_in_coins = this.productdata.pcoin;
            this.tranactionservice
                .saveTransaction(this.transactionObj)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Tranaction Saved!!",
                text: "Thank You!",
            });
            this.reccomservice.deleteproductbyId(this.productdata1[0].pid)
                .subscribe((data) => console.log(data));
            this.reccomservice.deleteproductbyId(this.productdata.pid)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "success",
                title: "Product Deleted!!",
                text: "Thank You!",
            });
            this.emailObj.recipient = this.coindata.email;
            console.log(this.emailObj.recipient);
            this.emailservice
                .emailnotification(this.emailObj)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
Payment3Component.ɵfac = function Payment3Component_Factory(t) { return new (t || Payment3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__["RecommedationService"])); };
Payment3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Payment3Component, selectors: [["app-payment3"]], decls: 43, vars: 7, consts: [[1, "pl"], ["mat-stroked-button", "", "tabIndex", "-3", 1, "btn-dialog-close", 3, "click"], [1, "center-wrapper"], [1, "content"], [3, "formGroup"], [1, "top-bar", 2, "text-align", "center"], [1, "bag-product"], [1, "description"], [1, "product-code"], [1, "description-text"], [1, "bag-total"], [1, "fa-solid", "fa-coins", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], [1, "form-group"], [1, "fa-solid", "fa-right-left", 2, "margin-right", "0.5rem", "margin-left", "0.5rem"], ["for", "promo-check"], [1, "promo-checkbox"], [1, "total"], ["formControlName", "pid", "ngDefaultControl", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 2, "background", "hsla(106, 86%, 57%, 0.762)", 3, "click"], [1, "pl-lg-3"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function Payment3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Payment3Component_Template_button_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Coin For Exchange :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Payment3Component_mat_option_37_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Payment3Component_Template_button_click_38_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Request Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Payment3Component_Template_button_click_41_listener() { return ctx.onClickCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Add More Coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product ID: ", ctx.productdata.pid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.desc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Available BarterCoin:", ctx.barterCoins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pcoin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abc);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"]], styles: [".btn-dialog-close[_ngcontent-%COMP%]{\n  \n  margin-left: 800px;\n  padding-top: 1px;\n}\n\n\n.center-wrapper[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 80%; \n  }\n\n\n.content[_ngcontent-%COMP%] { \n    margin: 0 auto;\n    max-width: 800px; \n   }\n\n\n.description[_ngcontent-%COMP%] { \n    padding-right: 1rem;\n    width: 60%; }\n\n\n.total[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n\n\n.top-bar[_ngcontent-%COMP%], .bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before { background: rgb(180, 202, 251); }\n\n\n.bag-head[_ngcontent-%COMP%]::after, .bag-total[_ngcontent-%COMP%]::before {\n    content: \"\";\n    width: 100%;\n    height: 3px;\n    display: block;  }\n\n\n.bag-product[_ngcontent-%COMP%], .quantity-wrapper[_ngcontent-%COMP%], .total[_ngcontent-%COMP%]\n     {\n      display: flex;\n      justify-content: space-between; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUdBO0lBQ0ksZUFBZTtJQUdmLGFBQWE7SUFJTCxzQkFBc0I7SUFHdEIsdUJBQXVCO0lBQy9CLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0dBQ2pCOzs7QUFJRDtJQUNFLG1CQUFtQjtJQUNuQixVQUFVLEVBQUU7OztBQUdkLFNBQVMsbUJBQW1CLEVBQUU7OztBQUc5Qjs7dUJBRXFCLDhCQUE4QixFQUFFOzs7QUFHckQ7O0lBRUUsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYyxHQUFHOzs7QUFHakI7Ozs7TUFNRSxhQUFhO01BR1AsOEJBQThCLEVBQUUiLCJmaWxlIjoicGF5bWVudDMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bi1kaWFsb2ctY2xvc2V7XG4gIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cbiAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG5cbi5jZW50ZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7IFxuICB9XG4gIFxuICAuY29udGVudCB7IFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogODAwcHg7IFxuICAgfVxuICBcbiAgXG4gIFxuICAuZGVzY3JpcHRpb24geyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiA2MCU7IH1cbiAgXG4gIFxuICAudG90YWwgeyBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4gIFxuICBcbiAgLnRvcC1iYXIsXG4gIC5iYWctaGVhZDo6YWZ0ZXIsXG4gIC5iYWctdG90YWw6OmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYigxODAsIDIwMiwgMjUxKTsgfVxuICBcbiAgXG4gIC5iYWctaGVhZDo6YWZ0ZXIsXG4gIC5iYWctdG90YWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBkaXNwbGF5OiBibG9jazsgIH1cbiAgXG4gIFxuICAgIC5iYWctcHJvZHVjdCxcbiAgICAucXVhbnRpdHktd3JhcHBlcixcbiAgICAudG90YWxcbiAgICAgeyBcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICBcbiAgXG4gIFxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Payment3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-payment3",
                templateUrl: "./payment3.component.html",
                styleUrls: ["./payment3.component.css"]
            }]
    }], function () { return [{ type: _component_productdetails_product_details_service__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _update_details_service__WEBPACK_IMPORTED_MODULE_10__["UpdateDetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"] }, { type: _email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _services_recommendation_service_recommedation_service__WEBPACK_IMPORTED_MODULE_14__["RecommedationService"] }]; }, null); })();


/***/ }),

/***/ "iPoy":
/*!***********************************************!*\
  !*** ./src/app/services/chat/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ChatService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // baseUrl="http://localhost:8080";
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    updateChat(message, chatId) {
        return this.httpClient.put(this.baseUrl + "/chatservice/chats/message/" + `${chatId}`, message);
    }
    getChatById(chatId) {
        return this.httpClient.get(this.baseUrl + "/chatservice/chats/" + chatId);
    }
    createChatRoom(chat) {
        console.log(chat);
        return this.httpClient.post(this.baseUrl + "/chatservice/chats/add", chat);
    }
    getChatIdByBuyerAndSellerEmail(buyerEmail, ownerEmail) {
        return this.httpClient.get(this.baseUrl + "/chatservice/chats/chatByBothOwnerAndBuyerEmail" + '?buyerEmail=' + buyerEmail + '&ownerEmail=' + ownerEmail);
    }
    getChatByBuyerOrSellerEmail(email) {
        return this.httpClient.get(this.baseUrl + "/chatservice/chats/chatByOwnerOrBuyerEmail/" + email);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "j5uH":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(value, filterString, propName) {
        const result = [];
        if (!value || filterString === '' || propName === '') {
            return value;
        }
        value.forEach((b) => {
            if (b[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
                result.push(b);
            }
        });
        return result;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "jjjf":
/*!*************************************!*\
  !*** ./src/app/models/chat/chat.ts ***!
  \*************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
class Chat {
    constructor() {
    }
}


/***/ }),

/***/ "k3Qe":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //  baseUrl="http://localhost:8080"
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    registerUser(user) {
        console.log(user);
        return this.httpClient.post(this.baseUrl + "/userservice/users/user", user);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kMBp":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _update_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-details.service */ "Ho9W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MyProfileComponent {
    constructor(domSanitizer, userratingservice, router, route) {
        this.domSanitizer = domSanitizer;
        this.userratingservice = userratingservice;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.email = localStorage.getItem('loginEmail');
        console.log(this.email);
        // this.email = this.route.snapshot.params["email"];
        this.employees = new _user_registration__WEBPACK_IMPORTED_MODULE_1__["UserRegistration"]();
        this.userratingservice
            .getUserDetailByEmail(this.email)
            .subscribe((data) => {
            this.employees = data;
            console.log(this.employees);
            this.firstname = this.employees.firstname;
            this.lastname = this.employees.lastname;
            this.email = this.employees.email;
            this.mobile = this.employees.mobile;
            this.age = this.employees.age;
            this.street = this.employees.street;
            this.city = this.employees.city;
            this.state = this.employees.state;
            this.pincode = this.employees.pincode;
            this.gender = this.employees.gender;
            this.password = this.employees.password;
            this.image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + this.employees.image);
        });
    }
    updateEmployee(email) {
        this.router.navigate(["/navbar/updateDetails"], email);
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_details_service__WEBPACK_IMPORTED_MODULE_3__["UpdateDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 89, vars: 11, consts: [[1, "container"], [1, "text-primary"], [1, "row"], [1, "col-md-3"], [1, "text-center"], ["alt", "Add profile Photo", 1, "avatar", "img-circle", "img-thumbnail", 3, "src"], [1, "col-xl-9", "col-lg-9", "col-md-12", "col-sm-12", "col-12"], [1, "card", "h-100"], [1, "card-body", 2, "border", "3px solid rgb(55, 6, 116)"], [1, "row", "gutters"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "mb-2", "text-primary"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], [1, "form-group"], ["for", "fullName"], ["for", "phone"], ["for", "website"], [1, "mt-3", "mb-2", "text-primary"], ["for", "Street"], ["for", "ciTy"], ["for", "sTate"], ["for", "pin"], [1, "text-right"], [1, "btn", "btn-primary", 3, "click"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_87_listener() { return ctx.updateEmployee(ctx.employees.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.firstname, " ", ctx.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pincode);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-my-profile",
                templateUrl: "./my-profile.component.html",
                styleUrls: ["./my-profile.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _update_details_service__WEBPACK_IMPORTED_MODULE_3__["UpdateDetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/accountdata/accountdata.component */ "1pwt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/nav.service */ "wsK7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["sidenav"];
function NavbarComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registered Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(dialog, httpClient, navservice, router) {
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.navservice = navservice;
        this.router = router;
        this.isDisabled = true;
        this.coin = 50;
        this.usersemail = "";
        this.username = "";
        this.isExpanded = false;
        this.isShowing = false;
    }
    ngOnInit() {
        this.usersemail = localStorage.getItem('loginEmail');
        this.navservice.getuserdetails(this.usersemail).subscribe((data) => {
            this.username = data.firstname;
            this.coin = data.barterCoins;
        });
    }
    goToHome() {
    }
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
    onClickCoin() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.restoreFocus = false;
        dialogConfig.width = "70%";
        dialogConfig.height = "75%";
        this.dialog.open(_component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_2__["AccountdataComponent"], dialogConfig);
    }
    onClicklogout() {
        // localStorage.removeItem('loginEmail');
        localStorage.clear();
        this.router.navigateByUrl('');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 56, vars: 10, consts: [[1, "example-toolbar", 2, "background", "rgb(130, 207, 238)"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/navbar/recommendation-service", 1, "col-lg-5", "col-md-5", "col-sm-5", "col-12"], ["src", "assets/Objects.png", "width", "50", "height", "50", "alt", "", 1, "d-inline-block"], [1, "Title"], [1, "example-spacer"], ["fxShow", "true"], ["mat-button", "", 2, "color", "black", "cursor", "text !important", "text-decoration", "None !important", 3, "disabled"], [1, "material-icons", 2, "color", "black", "cursor", "pointer", 3, "click"], [2, "cursor", "pointer", 3, "click"], ["mat-button", "", 1, "email", 3, "matMenuTriggerFor"], [1, "material-icons"], [1, "customize"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/navbar/myProfile", 2, "color", "black"], ["mat-menu-item", "", 2, "color", "black", 3, "click"], ["autosize", "", 1, "example-container"], ["mode", "side", "opened", "true", 1, "example-sidenav", 3, "mouseenter", "mouseleave"], ["sidenav", ""], ["routerLink", "/navbar/recommendation-service", 1, "parent"], ["class", "full-width", 4, "ngIf"], ["mat-list-icon", ""], ["routerLink", "/navbar/registerProduct", 1, "parent"], ["routerLink", "/navbar/productregisterbyuser", 1, "parent"], ["routerLink", "/navbar/updateDetails", 1, "parent"], ["routerLink", "/navbar/transcations", 1, "parent"], ["routerLink", "/navbar/chat", 1, "parent"], [2, "width", "100%", "overflow-x", "hidden", "overflow-y", "hidden", "overflow-y", "scroll", "overflow-x", "scroll"], [1, "full-width"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener() { return ctx.isExpanded = !ctx.isExpanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " SwapSquad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_11_listener() { return ctx.onClickCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " radio_button_checked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_13_listener() { return ctx.onClickCoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " account_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_23_listener() { return ctx.onClicklogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-sidenav-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-sidenav", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_mat_sidenav_mouseenter_26_listener() { return ctx.mouseenter(); })("mouseleave", function NavbarComponent_Template_mat_sidenav_mouseleave_26_listener() { return ctx.mouseleave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_span_30_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NavbarComponent_span_34_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "workspaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NavbarComponent_span_38_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "do_not_disturb_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NavbarComponent_span_42_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-list-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NavbarComponent_span_46_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-list-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, NavbarComponent_span_50_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-sidenav-content", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coins: ", ctx.coin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.usersemail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".example-icon[_ngcontent-%COMP%] {\n    padding: 0 14px;\n  }\n  \n  .example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n  \n  .example-container[_ngcontent-%COMP%] {\n    height: 650px;\n    border: 1px solid rgb(130, 207, 238, 0.5);\n  }\n  \n  .example-sidenav-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .menu-button[_ngcontent-%COMP%] {\n    transition: 300ms ease-in-out;\n    transform: rotate(0deg);\n  }\n  \n  .menu-button.rotated[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n  }\n  \n    .customize {\n    background: rgb(130, 207, 238);;\n    color: black;\n  }\n  \n  .Title[_ngcontent-%COMP%] {\n    font-family: 'Rubik Distressed', cursive;\n    color: black;\n    font-size: 140%;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  \n  .Title[_ngcontent-%COMP%]:hover {\n    \n    color: rgb(210, 29, 41);\n   \n  }\n  \n  .navbar-brand[_ngcontent-%COMP%]{\n    pointer-events: none;\n}\n  \n  .email[_ngcontent-%COMP%]:hover{\n  color: inherit;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxvQkFBb0I7QUFDeEI7O0VBRUE7RUFDRSxjQUFjOztBQUVoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMwLCAyMDcsIDIzOCwgMC41KTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1lbnUtYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAubWVudS1idXR0b24ucm90YXRlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuY3VzdG9taXplIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMwLCAyMDcsIDIzOCk7O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuVGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgRGlzdHJlc3NlZCcsIGN1cnNpdmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLlRpdGxlOmhvdmVyIHtcbiAgICBcbiAgICBjb2xvcjogcmdiKDIxMCwgMjksIDQxKTtcbiAgIFxuICB9XG5cbiAgLm5hdmJhci1icmFuZHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmVtYWlsOmhvdmVye1xuICBjb2xvcjogaW5oZXJpdDtcbiAgXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _service_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }] }); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class LandingPageComponent {
    constructor() {
        this.color = "accent";
        this.color1 = "accent";
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 125, vars: 2, consts: [["data-spy", "scroll", "data-target", ".navbar", "data-offset", "50"], [1, "navbar", "navbar-expand-lg", "navbar", "fixed-top", "navbar-light"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-12"], ["src", "assets/Objects.png", "routerLink", "", "width", "50", "height", "50", "alt", "logo", 1, "d-inline-block", "navbar-brand"], ["routerLink", "", 1, "Title", "navbar-brand"], [1, "rightNav", "col-lg-7", "col-md-7", "col-sm-7", "col-12", "mt-2"], ["mat-raised-button", "", "routerLink", "login", 1, "mr-3", 3, "color", "mouseover", "mouseout"], ["mat-raised-button", "", "routerLink", "register-user", 1, "mr-4", 3, "color", "mouseover", "mouseout"], ["data-ride", "carousel", 1, "carousel", "slide"], ["id", "header-carousel", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/b4.jpg", "alt", "Image", 1, "w-100", 2, "height", "80vh"], [1, "carousel-caption", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "p-3", 2, "max-width", "900px"], [1, "display-1", "text-white", "mb-md-4", "animated", "zoomIn", "heading"], [1, "text-white", "text-uppercase", "mb-3", "animated", "slideInDown"], [1, "carousel-item"], ["src", "assets/b1.jpg", "alt", "Image", 1, "w-100", 2, "height", "80vh"], ["src", "assets/b2.jpg", "alt", "Image", 1, "w-100", 2, "height", "80vh"], ["src", "assets/b6.jpg", "alt", "Image", 1, "w-100", 2, "height", "80vh"], ["type", "button", "data-bs-target", "#header-carousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#header-carousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container"], [1, "row", "bg-light"], [1, "row", "bg-light", "hover-4", "boxes"], [1, "col-md-6", "description", "hover-1"], [1, "col-md-6", "image-box"], ["src", "assets/chat.jpeg", "width", "200", "height", "200", 1, "img-fluid"], [1, "row", "hover-4", "content-mid-body"], [1, "col-md-6", "order-md-1", "order-2", "image-box"], ["src", "assets/MailService.jpeg", "width", "200", "height", "200", 1, "img-fluid"], [1, "col-md-6", "order-md-12", "description", "order-1"], [1, "row", "bg-light", "hover-4"], ["src", "assets/transactionHistory.jpeg", "width", "200", "height", "200", 1, "img-fluid"], ["src", "assets/Coins.jpeg", "width", "200", "height", "200", 1, "img-fluid"], [1, "bg-dark", "text-center", "text-white"], [1, "container", "p-4"], [1, "mb-4"], ["href", "#!", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "/", 1, "text-white"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SwapSquad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function LandingPageComponent_Template_button_mouseover_8_listener() { return ctx.color = "primary"; })("mouseout", function LandingPageComponent_Template_button_mouseout_8_listener() { return ctx.color = "accent"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function LandingPageComponent_Template_button_mouseover_10_listener() { return ctx.color1 = "primary"; })("mouseout", function LandingPageComponent_Template_button_mouseout_10_listener() { return ctx.color1 = "accent"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REGISTER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Welcome to SwapSquad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Here you can exchange your things by using your things or by using Barter Coins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Welcome to SwapSquad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Here you can exchange your things by using your things or by using Barter Coins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Welcome to SwapSquad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Here you can exchange your things by using your things or by using Barter Coins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Welcome to SwapSquad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Here you can exchange your things by using your things or by using Barter Coins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CHAT SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "You can Chat with the person whom you are exchanging your Product. With the help of Chat Services you get the detailed information of product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "MAIL SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "When the Transaction is completed i.e you exchange the product You and exchanger both get a confirmation mail from SwapSquad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "TRANSACTION HISTORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "You can also have the access to all the transactions you have done. You may filter the transactions by using the TransactionId or the mailId.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "REFERAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Refer SwapSquad and earn 100 barter coin when you friend join swapsqad , and for each transaction you get 25 Barter coins. Your friend get 50 Barter coins as joining bonous.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "footer", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "THANK YOU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " We Exist to provide people with excess to a better future. Hope you visit again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " \u00A9 2022 Copyright : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "SwapSquad.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: 'Merienda';\n  font-size: 15px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: rgb(130, 207, 238);\n  display: flex;\n}\n\n.fade-out[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut 2s;\n          animation: fadeOut 2s;\n  opacity: 0;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation: fade 5s;\n          animation: fade 5s;\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.Title[_ngcontent-%COMP%] {\n  font-family: 'Rubik Distressed', cursive;\n  font-size: 180%;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.Title[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n  color: rgb(210, 29, 41);\n}\n\n.rightNav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n\n.flag[_ngcontent-%COMP%] {\n  max-height: 20px;\n  max-width: 20px;\n  margin-top: 10px;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: lightgrey !important;\n}\n\n.content-mid-body[_ngcontent-%COMP%] {\n  background-color: rgba(220, 232, 235, 0.7);\n  border-radius: 6px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  transition: all 1s ease\n}\n\n.card-body[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.prenota-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.image-prenota[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  max-height: 750px;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 40%;\n}\n\n.img-slider[_ngcontent-%COMP%] {\n  min-height: 320px;\n}\n\n.navMenu[_ngcontent-%COMP%] {\n  padding-top: 75px;\n  padding-bottom: 20px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.mappa[_ngcontent-%COMP%] {\n  height: 320px;\n  padding-right: 10px;\n}\n\n@media screen and (max-width : 1920px) {\n  .only-mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n\n@media screen and (max-width : 506px) {\n\n  .only-mobile[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n\n  margin-top: 30px;\n  padding-top: 20px;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  font-size: 28;\n}\n\n.image-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.hover-4[_ngcontent-%COMP%] {\n  border: 2px solid;\n  \n  -o-border-image: repeating-linear-gradient(135deg, #67abc4 0 10px, #1095c1 0 20px, #59c8f7 0 30px) 8;\n     border-image: repeating-linear-gradient(135deg, #67abc4 0 10px, #1095c1 0 20px, #59c8f7 0 30px) 8;\n  -webkit-mask:\n    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg, #000 0) var(--_i, 200%) 0 /200% var(--_i, 8px) border-box no-repeat,\n    conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0 var(--_i, 200%)/var(--_i, 8px) 200% border-box no-repeat,\n    linear-gradient(#000 0 0) padding-box no-repeat;\n  transition: .3s, -webkit-mask-position .3s .3s;\n\n}\n\n.hover-4[_ngcontent-%COMP%]:hover {\n  --_i: 100%;\n  color: #CC333F;\n  transition: .3s, -webkit-mask-size .3s .3s;\n}\n\n.hover-3[_ngcontent-%COMP%] {\n  --b: 0.1em;\n  \n  --c: #1095c1;\n  \n\n  color: #0000;\n  padding-block: var(--b);\n  background:\n    linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p, 0%))/100% 200%,\n    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;\n  -webkit-background-clip: text, padding-box;\n  background-clip: text, padding-box;\n  transition: .3s var(--_s, 0s) linear, background-size .3s calc(.3s - var(--_s, 0s));\n}\n\n.hover-3[_ngcontent-%COMP%]:hover {\n  --_p: 100%;\n  --_s: .3s;\n}\n\n.hover-2[_ngcontent-%COMP%] {\n  --s: 0.1em;\n  \n  --c: #1095c1;\n  \n\n  color: #0000;\n  padding-bottom: var(--s);\n  background:\n    linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%))/200% 100%,\n    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p, 0%) var(--s) no-repeat;\n  -webkit-background-clip: text, padding-box;\n  background-clip: text, padding-box;\n  transition: 0.5s;\n}\n\n.hover-2[_ngcontent-%COMP%]:hover {\n  --_p: 100%\n}\n\n.hover-1[_ngcontent-%COMP%] {\n  color: #0000;\n  background:\n    linear-gradient(90deg, #0e83a9 50%, #000 0) var(--_p, 100%)/200% no-repeat;\n  -webkit-background-clip: text;\n  background-clip: text;\n  transition: .4s;\n}\n\n.hover-1[_ngcontent-%COMP%]:hover {\n  --_p: 0%;\n}\n\n.boxes[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  \n  background-color: rgba(89, 137, 156, 0.7);\n  z-index: 1;\n}\n\n@media (max-width: 576px) {\n  .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500 !important;\n  }\n\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 600 !important;\n  }\n}\n\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n\n}\n\n\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0 5px;\n  width: 15px;\n  height: 15px;\n  background: #DDDDDD;\n  border-radius: 2px;\n  transition: .5s;\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\n  width: 30px;\n  background: var(--primary);\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-item.center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  transition: .5s;\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-item.center[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  background: #FFFFFF !important;\n  box-shadow: 0 0 30px #DDDDDD;\n}\n\n.bg-header[_ngcontent-%COMP%] {\n  \n  background-size: cover;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  width: 100%;\n  left: 0;\n}\n\n.testimonial-carousel[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\n  width: 30px;\n  background: var(--primary);\n}\n\n.link-animated[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: .5s;\n}\n\n.link-animated[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding-left: 10px;\n}\n\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.animated.infinite[_ngcontent-%COMP%] {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.animated.hinge[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.animated.flipOutX[_ngcontent-%COMP%], .animated.flipOutY[_ngcontent-%COMP%], .animated.bounceIn[_ngcontent-%COMP%], .animated.bounceOut[_ngcontent-%COMP%] {\n  -webkit-animation-duration: .75s;\n          animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n@keyframes bounce {\n\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n.bounce[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounce;\n          animation-name: bounce;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n.flash[_ngcontent-%COMP%] {\n  -webkit-animation-name: flash;\n          animation-name: flash;\n}\n\n\n\n@-webkit-keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse[_ngcontent-%COMP%] {\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand[_ngcontent-%COMP%] {\n  -webkit-animation-name: rubberBand;\n          animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake[_ngcontent-%COMP%] {\n  -webkit-animation-name: shake;\n          animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n.headShake[_ngcontent-%COMP%] {\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n          animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing[_ngcontent-%COMP%] {\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n          animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada[_ngcontent-%COMP%] {\n  -webkit-animation-name: tada;\n          animation-name: tada;\n}\n\n\n\n@-webkit-keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.wobble[_ngcontent-%COMP%] {\n  -webkit-animation-name: wobble;\n          animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n\n  from,\n  11.1%,\n  to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n\n  from,\n  11.1%,\n  to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello[_ngcontent-%COMP%] {\n  -webkit-animation-name: jello;\n          animation-name: jello;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceIn;\n          animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceInDown;\n          animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceInLeft;\n          animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceInRight;\n          animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceInUp;\n          animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceOut;\n          animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceOutDown;\n          animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceOutLeft;\n          animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceOutRight;\n          animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: bounceOutUp;\n          animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDownBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInDownBig;\n          animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInLeft;\n          animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInLeftBig;\n          animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInRight;\n          animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRightBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInRightBig;\n          animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUpBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeInUpBig;\n          animation-name: fadeInUpBig;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutDown;\n          animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutDownBig;\n          animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutLeft;\n          animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutLeftBig;\n          animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutRight;\n          animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutRightBig;\n          animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeOutUpBig;\n          animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n          animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInX[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n          animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInY[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n          animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX[_ngcontent-%COMP%] {\n  -webkit-animation-name: flipOutX;\n          animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n          animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: lightSpeedIn;\n          animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: lightSpeedOut;\n          animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateIn;\n          animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateInDownLeft;\n          animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateInDownRight;\n          animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateInUpLeft;\n          animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateInUpRight;\n          animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateOut;\n          animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateOutDownLeft;\n          animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateOutDownRight;\n          animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateOutUpLeft;\n          animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: rotateOutUpRight;\n          animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge[_ngcontent-%COMP%] {\n  -webkit-animation-name: hinge;\n          animation-name: hinge;\n}\n\n@-webkit-keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.jackInTheBox[_ngcontent-%COMP%] {\n  -webkit-animation-name: jackInTheBox;\n          animation-name: jackInTheBox;\n}\n\n\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.rollIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: rollIn;\n          animation-name: rollIn;\n}\n\n\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: rollOut;\n          animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomIn;\n          animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomInDown;\n          animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomInLeft;\n          animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomInRight;\n          animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomInUp;\n          animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomOut;\n          animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomOutDown;\n          animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomOutLeft;\n          animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomOutRight;\n          animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: zoomOutUp;\n          animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInLeft;\n          animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInRight;\n          animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInUp;\n          animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideOutDown;\n          animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideOutLeft;\n          animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideOutRight;\n          animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideOutUp;\n          animation-name: slideOutUp;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUsc0JBQXNCO0VBRXRCLFlBQVk7RUFFWixTQUFTO0VBRVQsVUFBVTtFQUNWO0FBQ0Y7O0FBRUE7RUFLRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VB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QUFrQjtJQUNsQixtQ0FBbUM7RUFDckM7QUFDRjs7QUFFQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDIwNywgMjM4KTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZSA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5UaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgRGlzdHJlc3NlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTgwJTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLlRpdGxlIDpob3ZlcntcbiAgY29sb3I6IHJnYigyMTAsIDI5LCA0MSk7XG59XG4ucmlnaHROYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG5cbi5mbGFnIHtcbiAgbWF4LWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LW1pZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMiwgMjM1LCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAvKiBGaXJlZm94ICovXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAvKiBJRSA5ICovXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgLyogT3BlcmEgKi9cbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Vcbn1cblxuLmNhcmQtYm9keTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnByZW5vdGEtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5pbWFnZS1wcmVub3RhIHtcbiAgb3BhY2l0eTogMC40O1xuICBtYXgtaGVpZ2h0OiA3NTBweDtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICB0b3A6IDQwJTtcbn1cblxuLmltZy1zbGlkZXIge1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbn1cblxuLm5hdk1lbnUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWFwcGEge1xuICBoZWlnaHQ6IDMyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTkyMHB4KSB7XG4gIC5vbmx5LW1vYmlsZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1MDZweCkge1xuXG4gIC5vbmx5LW1vYmlsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcblxuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnNvY2lhbC1pY29uIHtcbiAgZm9udC1zaXplOiAyODtcbn1cblxuLmltYWdlLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhvdmVyLTQge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLyogYm9yZGVyLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDEzNWRlZywjRjhDQTAwIDAgMTBweCwjRTk3RjAyIDAgMjBweCwjZDMzNDZjIDAgMzBweCkgODsgKi9cbiAgYm9yZGVyLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY3YWJjNCAwIDEwcHgsICMxMDk1YzEgMCAyMHB4LCAjNTljOGY3IDAgMzBweCkgODtcbiAgLXdlYmtpdC1tYXNrOlxuICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCA4cHggcmlnaHQgOHB4LCAjMDAwMCA5MGRlZywgIzAwMCAwKSB2YXIoLS1faSwgMjAwJSkgMCAvMjAwJSB2YXIoLS1faSwgOHB4KSBib3JkZXItYm94IG5vLXJlcGVhdCxcbiAgICBjb25pYy1ncmFkaWVudChhdCBib3R0b20gOHB4IGxlZnQgOHB4LCAjMDAwMCA5MGRlZywgIzAwMCAwKSAwIHZhcigtLV9pLCAyMDAlKS92YXIoLS1faSwgOHB4KSAyMDAlIGJvcmRlci1ib3ggbm8tcmVwZWF0LFxuICAgIGxpbmVhci1ncmFkaWVudCgjMDAwIDAgMCkgcGFkZGluZy1ib3ggbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiAuM3MsIC13ZWJraXQtbWFzay1wb3NpdGlvbiAuM3MgLjNzO1xuXG59XG5cbi5ob3Zlci00OmhvdmVyIHtcbiAgLS1faTogMTAwJTtcbiAgY29sb3I6ICNDQzMzM0Y7XG4gIHRyYW5zaXRpb246IC4zcywgLXdlYmtpdC1tYXNrLXNpemUgLjNzIC4zcztcbn1cblxuLmhvdmVyLTMge1xuICAtLWI6IDAuMWVtO1xuICAvKiB0aGUgdGhpY2tuZXNzIG9mIHRoZSBsaW5lICovXG4gIC0tYzogIzEwOTVjMTtcbiAgLyogdGhlIGNvbG9yICovXG5cbiAgY29sb3I6ICMwMDAwO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1iKTtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tYykgNTAlLCAjMDAwIDApIDAlIGNhbGMoMTAwJSAtIHZhcigtLV9wLCAwJSkpLzEwMCUgMjAwJSxcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tYykgMCAwKSAwJSB2YXIoLS1fcCwgMCUpL3ZhcigtLV9wLCAwJSkgdmFyKC0tYikgbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dCwgcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dCwgcGFkZGluZy1ib3g7XG4gIHRyYW5zaXRpb246IC4zcyB2YXIoLS1fcywgMHMpIGxpbmVhciwgYmFja2dyb3VuZC1zaXplIC4zcyBjYWxjKC4zcyAtIHZhcigtLV9zLCAwcykpO1xufVxuXG4uaG92ZXItMzpob3ZlciB7XG4gIC0tX3A6IDEwMCU7XG4gIC0tX3M6IC4zcztcbn1cblxuXG4uaG92ZXItMiB7XG4gIC0tczogMC4xZW07XG4gIC8qIHRoZSB0aGlja25lc3Mgb2YgdGhlIGxpbmUgKi9cbiAgLS1jOiAjMTA5NWMxO1xuICAvKiB0aGUgY29sb3IgKi9cblxuICBjb2xvcjogIzAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zKTtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWMpIDUwJSwgIzAwMCAwKSBjYWxjKDEwMCUgLSB2YXIoLS1fcCwgMCUpKS8yMDAlIDEwMCUsXG4gICAgbGluZWFyLWdyYWRpZW50KHZhcigtLWMpIDAgMCkgMCUgMTAwJS92YXIoLS1fcCwgMCUpIHZhcigtLXMpIG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQsIHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQsIHBhZGRpbmctYm94O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaG92ZXItMjpob3ZlciB7XG4gIC0tX3A6IDEwMCVcbn1cblxuLmhvdmVyLTEge1xuICBjb2xvcjogIzAwMDA7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGU4M2E5IDUwJSwgIzAwMCAwKSB2YXIoLS1fcCwgMTAwJSkvMjAwJSBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLmhvdmVyLTE6aG92ZXIge1xuICAtLV9wOiAwJTtcbn1cblxuLmJveGVzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4vKiBjYXJvdXNlbCAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoOSwgMzAsIDYyLCAuNyk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODksIDEzNywgMTU2LCAwLjcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG5cbn1cblxuLyoqKiBUZXN0aW1vbmlhbCAqKiovXG4udGVzdGltb25pYWwtY2Fyb3VzZWwgLm93bC1kb3RzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRlc3RpbW9uaWFsLWNhcm91c2VsIC5vd2wtZG90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4udGVzdGltb25pYWwtY2Fyb3VzZWwgLm93bC1kb3QuYWN0aXZlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuXG4udGVzdGltb25pYWwtY2Fyb3VzZWwgLm93bC1pdGVtLmNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRlc3RpbW9uaWFsLWNhcm91c2VsIC5vd2wtaXRlbSAudGVzdGltb25pYWwtaXRlbSB7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLnRlc3RpbW9uaWFsLWNhcm91c2VsIC5vd2wtaXRlbS5jZW50ZXIgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4ICNEREREREQ7XG59XG5cbi5iZy1oZWFkZXIge1xuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg5LCAzMCwgNjIsIC43KSwgcmdiYSg5LCAzMCwgNjIsIC43KSksIHVybCguLi9pbWcvY2Fyb3VzZWwtMS5qcGcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXI6OmJlZm9yZSxcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cblxuLnRlc3RpbW9uaWFsLWNhcm91c2VsIC5vd2wtZG90LmFjdGl2ZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmxpbmstYW5pbWF0ZWQgYSB7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmxpbmstYW5pbWF0ZWQgYTpob3ZlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFuaW1hdGVkLmluZmluaXRlIHtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5hbmltYXRlZC5oaW5nZSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5hbmltYXRlZC5mbGlwT3V0WCxcbi5hbmltYXRlZC5mbGlwT3V0WSxcbi5hbmltYXRlZC5ib3VuY2VJbixcbi5hbmltYXRlZC5ib3VuY2VPdXQge1xuICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcblxuICBmcm9tLFxuICAyMCUsXG4gIDUzJSxcbiAgODAlLFxuICB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgNDAlLFxuICA0MyUge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG4gIH1cblxuICA3MCUge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG59XG5cbkBrZXlmcmFtZXMgZmxhc2gge1xuXG4gIGZyb20sXG4gIDUwJSxcbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyNSUsXG4gIDc1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZmxhc2gge1xuICBhbmltYXRpb24tbmFtZTogZmxhc2g7XG59XG5cbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5cbi5wdWxzZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcbn1cblxuQGtleWZyYW1lcyBydWJiZXJCYW5kIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAxLjA1LCAxKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5cbi5ydWJiZXJCYW5kIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmQ7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuXG4gIGZyb20sXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMTAlLFxuICAzMCUsXG4gIDUwJSxcbiAgNzAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICB9XG5cbiAgMjAlLFxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICB9XG59XG5cbi5zaGFrZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcbn1cblxuQGtleWZyYW1lcyBoZWFkU2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgNi41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xuICB9XG5cbiAgMTguNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7XG4gIH1cblxuICAzMS41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xuICB9XG5cbiAgNDMuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4uaGVhZFNoYWtlIHtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBoZWFkU2hha2U7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAyMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gIH1cbn1cblxuLnN3aW5nIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xufVxuXG5Aa2V5ZnJhbWVzIHRhZGEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cblxuICAxMCUsXG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgfVxuXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICB9XG5cbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbn1cblxuLnRhZGEge1xuICBhbmltYXRpb24tbmFtZTogdGFkYTtcbn1cblxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG5cbkBrZXlmcmFtZXMgd29iYmxlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4ud29iYmxlIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcbn1cblxuQGtleWZyYW1lcyBqZWxsbyB7XG5cbiAgZnJvbSxcbiAgMTEuMSUsXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAyMi4yJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICB9XG5cbiAgMzMuMyUge1xuICAgIHRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XG4gIH1cblxuICA0NC40JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gIH1cblxuICA1NS41JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gIH1cblxuICA2Ni42JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xuICB9XG5cbiAgNzcuNyUge1xuICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgfVxuXG4gIDg4LjglIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xuICB9XG59XG5cbi5qZWxsbyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcblxuICBmcm9tLFxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUsXG4gIHRvIHtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICB9XG5cbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xuICB9XG5cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTcsIC45NywgLjk3KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuXG4uYm91bmNlSW4ge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcblxuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmJvdW5jZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcblxuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmJvdW5jZUluTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG5cbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gIH1cblxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmJvdW5jZUluUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcblxuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICB9XG5cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01cHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZUluVXAge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VPdXQge1xuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcbiAgfVxuXG4gIDUwJSxcbiAgNTUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcbiAgfVxufVxuXG4uYm91bmNlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VPdXREb3duIHtcbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICB9XG5cbiAgNDAlLFxuICA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZU91dERvd24ge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG59XG5cbi5ib3VuY2VPdXRMZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZU91dFJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgfVxuXG4gIDQwJSxcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG59XG5cbi5ib3VuY2VPdXRVcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5mYWRlSW5Eb3duQmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJbkxlZnQge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5mYWRlSW5MZWZ0QmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJblJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJblJpZ2h0QmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5mYWRlSW5VcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5mYWRlSW5VcEJpZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5mYWRlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dERvd24ge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG59XG5cbi5mYWRlT3V0RG93bkJpZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dExlZnQge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dExlZnRCaWcge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cblxuLmZhZGVPdXRSaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dFJpZ2h0QmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodEJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0VXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cblxuLmZhZGVPdXRVcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gIH1cbn1cblxuLmZhZGVPdXRVcEJpZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXBCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmxpcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxufVxuXG4uYW5pbWF0ZWQuZmxpcCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG59XG5cbkBrZXlmcmFtZXMgZmxpcEluWCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxufVxuXG4uZmxpcEluWCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xufVxuXG5Aa2V5ZnJhbWVzIGZsaXBJblkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMjBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cbn1cblxuLmZsaXBJblkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZmxpcEluWTtcbn1cblxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmZsaXBPdXRYIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXBPdXRYO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGZsaXBPdXRZIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cblxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZmxpcE91dFkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XG59XG5cbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmxpZ2h0U3BlZWRJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmxpZ2h0U3BlZWRPdXQge1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVJbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5yb3RhdGVJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnJvdGF0ZUluRG93bkxlZnQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duTGVmdDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucm90YXRlSW5Eb3duUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW5VcExlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5yb3RhdGVJblVwTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVJblVwUmlnaHQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5yb3RhdGVJblVwUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ucm90YXRlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ucm90YXRlT3V0RG93bkxlZnQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5yb3RhdGVPdXREb3duUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnJvdGF0ZU91dFVwTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5yb3RhdGVPdXRVcFJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgaGluZ2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAyMCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIH1cblxuICA0MCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5oaW5nZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcbn1cblxuQGtleWZyYW1lcyBqYWNrSW5UaGVCb3gge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cblxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uamFja0luVGhlQm94IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbn1cblxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG5cbkBrZXlmcmFtZXMgcm9sbEluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4ucm9sbEluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcbn1cblxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG5cbkBrZXlmcmFtZXMgcm9sbE91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gIH1cbn1cblxuLnJvbGxPdXQge1xuICBhbmltYXRpb24tbmFtZTogcm9sbE91dDtcbn1cblxuQGtleWZyYW1lcyB6b29tSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uem9vbUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21Jbjtcbn1cblxuQGtleWZyYW1lcyB6b29tSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xuICB9XG59XG5cbi56b29tSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XG59XG5cbkBrZXlmcmFtZXMgem9vbUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbUluTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xuICB9XG59XG5cbi56b29tSW5SaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcbn1cblxuQGtleWZyYW1lcyB6b29tSW5VcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbUluVXAge1xuICBhbmltYXRpb24tbmFtZTogem9vbUluVXA7XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnpvb21PdXQge1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcbn1cblxuQGtleWZyYW1lcyB6b29tT3V0RG93biB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbU91dERvd24ge1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIH1cbn1cblxuLnpvb21PdXRMZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gIH1cbn1cblxuLnpvb21PdXRSaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xuICB9XG59XG5cbi56b29tT3V0VXAge1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dFVwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkxlZnQge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5SaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5VcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVPdXREb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVPdXRMZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVPdXRSaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0VXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVPdXRVcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nc9Z":
/*!***********************************************************!*\
  !*** ./src/app/services/accounts-data/account.service.ts ***!
  \***********************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AccountService {
    // private baserurla="http://localhost:9998/users/addaccount"
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private baseurl="http://localhost:8080"
        this.baseurl = "https://swapsquad.stackroute.io";
    }
    // public addAccount(accountObj:any){
    //   return this.httpClient.post<Account>(this.baseurl , accountObj);
    // }
    addAccount(user) {
        console.log(user);
        return this.httpClient.post(this.baseurl + "/userservice/users/addaccount", user);
    }
    getAccountByAccountNumber(accountNumber) {
        return this.httpClient.get(this.baseurl + "/userservice/users/" + accountNumber);
    }
    addAmount(email, amount) {
        return this.httpClient.put(this.baseurl + "/userservice/users/addcoin?email=" + email + "&amount=" + amount, {});
    }
    getAccountDataByEmail(email) {
        return this.httpClient.get(this.baseurl + "/userservice/users/account/" + email);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sHOe":
/*!****************************************!*\
  !*** ./src/app/models/chat/message.ts ***!
  \****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor() {
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/productdetails/productdetails.component */ "9fun");
/* harmony import */ var _component_register_product_register_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/register-product/register-product.component */ "ZWJv");
/* harmony import */ var _recommendation_service_recommendation_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommendation-service/recommendation-service.component */ "QEFn");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-user/register-user.component */ "MvdQ");
/* harmony import */ var _update_details_update_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-details/update-details.component */ "zTWJ");
/* harmony import */ var _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transcations/transcations.component */ "czv8");
/* harmony import */ var _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/chat/chat.component */ "/e34");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "kMBp");
/* harmony import */ var _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/accountdata/accountdata.component */ "1pwt");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _productregsiteredbyuser_productregsiteredbyuser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productregsiteredbyuser/productregsiteredbyuser.component */ "LtsO");

















const routes = [
    // { path: 'home', component: AppComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'register-user', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__["RegisterUserComponent"] },
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        children: [
            { path: 'registerProduct', component: _component_register_product_register_product_component__WEBPACK_IMPORTED_MODULE_3__["RegisterProductComponent"] },
            { path: 'productDetail', component: _component_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_2__["ProductdetailsComponent"] },
            { path: 'recommendation-service', component: _recommendation_service_recommendation_service_component__WEBPACK_IMPORTED_MODULE_4__["RecommendationServiceComponent"] },
            { path: 'updateDetails', component: _update_details_update_details_component__WEBPACK_IMPORTED_MODULE_6__["UpdateDetailsComponent"] },
            { path: 'transcations', component: _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_7__["TranscationsComponent"] },
            { path: 'myProfile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__["MyProfileComponent"] },
            { path: 'payment', component: _component_accountdata_accountdata_component__WEBPACK_IMPORTED_MODULE_10__["AccountdataComponent"] },
            { path: 'transcations', component: _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_7__["TranscationsComponent"] },
            { path: 'chat', component: _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"] },
            { path: 'transcations', component: _transcations_transcations_component__WEBPACK_IMPORTED_MODULE_7__["TranscationsComponent"] },
            { path: 'myProfile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__["MyProfileComponent"] },
            { path: 'productregisterbyuser', component: _productregsiteredbyuser_productregsiteredbyuser_component__WEBPACK_IMPORTED_MODULE_14__["ProductregsiteredbyuserComponent"] },
        ]
    },
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_login_user_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/login/user-dao */ "cKIH");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login/login.service */ "XXEo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Fill Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email Id* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Fill Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Should be min. 6 Characters* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Should be max. 15 Characters* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.submitted = false;
        // get f(): { [key: string]: AbstractControl } {
        //   return this.form.controls;
        // }
        this.loginObj = new _models_login_user_dao__WEBPACK_IMPORTED_MODULE_2__["UserDao"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)])
        });
    }
    ngOnInit() {
        // this.form = this.formBuilder.group(
        //   {
        //     email: ['', [Validators.required, Validators.email]],
        //     password: [
        //       '',
        //       [
        //         Validators.required,
        //         Validators.minLength(6),
        //         Validators.maxLength(40)
        //       ]
        //     ]
        //   }  
        // );
    }
    onSubmit() {
        // this.submitted = true;
        // if (this.form.invalid) {
        //   return;
        // }
        // console.log(JSON.stringify(this.form.value, null, 2));
        console.log("FORMDATA", this.form.value);
        this.loginObj.username = this.form.value.email;
        this.loginObj.password = this.form.value.password;
        this.loginService.loginUser(this.loginObj).subscribe(data => {
            console.log("validated", data);
            this.form.reset();
            localStorage.setItem("loginEmail", this.loginObj.username);
            this.router.navigate(["/navbar/recommendation-service"]);
        }, (error => {
            console.log(error);
            this.errorMessage = error.error;
        }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 8, consts: [["type", "button", "routerLink", "", 1, "btn", "btn-light"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-12"], ["src", "assets/Objects.png", "width", "50", "height", "50", "alt", "", 1, "d-inline-block"], [1, "Title"], ["cols", "2", "rowHeight", "90vh"], ["mat-cad-image", "", "src", "assets/r2.webp", "alt", "img", "width", "90%", "height", "80%"], [2, "background-color", "rgb(248, 252, 252)"], [1, "container", "col-md-6", 2, "background-color", "rgb(252, 250, 250)"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "small", "style", "color: red", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "small", 2, "color", "red"], ["type", "submit", "name", "submit_reg", "value", "Sign-In", 1, "btn", "btn-success", "width:100px", 3, "disabled", "click"], ["routerLink", "/register-user"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SwapSquad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_span_23_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Do not have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "registerUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".fcontainer[_ngcontent-%COMP%]{\n\n  height: 100vh;\n  display: flex;\n  \n  \n  \n  \n  \n  flex-wrap: wrap; \n  \n  flex-flow: column wrap; \n  \n  \n}\n\n.fitem[_ngcontent-%COMP%]{\n  \n\n  \n  width: 50%;\n  height: 100%;\n}\n\n.item1[_ngcontent-%COMP%]{\n  flex:1 ;\n  \n   flex-shrink: 2; \n\n}\n\n.item2[_ngcontent-%COMP%]{\n  width: 40%;\n  height: 100%;\n  \n  \n}\n\n.Title[_ngcontent-%COMP%] {\n  font-family: 'Rubik Distressed', cursive;\n  font-size: 180%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCOzs0QkFFMEI7RUFDMUIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQkFBc0I7OztBQUd4Qjs7QUFFQTs7OztFQUlFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0dBQ2pCLGNBQWM7O0FBRWpCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZjb250YWluZXJ7XG5cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xuICBmbGV4LXdyYXA6IHdyYXA7IFxuICAvKiBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTsgKi9cbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDsgXG4gIFxuICBcbn1cblxuLmZpdGVte1xuICBcblxuICBcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXRlbTF7XG4gIGZsZXg6MSA7XG4gIC8qIGZsZXgtZ3JvdzogMzsgKi9cbiAgIGZsZXgtc2hyaW5rOiAyOyBcblxufVxuXG4uaXRlbTJ7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogZmxleC1ncm93OiAyOyAqL1xuICBcbn1cblxuLlRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBEaXN0cmVzc2VkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxODAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "wsK7":
/*!***********************************************!*\
  !*** ./src/app/navbar/service/nav.service.ts ***!
  \***********************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NavService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private url: string ="http://localhost:8080"
        this.url = "https://swapsquad.stackroute.io";
    }
    getuserdetails(email) {
        return this.httpClient.get(this.url + "/userservice/users/user/" + email);
    }
}
NavService.ɵfac = function NavService_Factory(t) { return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavService, factory: NavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zTWJ":
/*!************************************************************!*\
  !*** ./src/app/update-details/update-details.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDetailsComponent", function() { return UpdateDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration */ "JsXI");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _update_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-details.service */ "Ho9W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class UpdateDetailsComponent {
    constructor(domSanitizer, updateDetailsService, router, route) {
        this.domSanitizer = domSanitizer;
        this.updateDetailsService = updateDetailsService;
        this.router = router;
        this.route = route;
        this.employees = new _user_registration__WEBPACK_IMPORTED_MODULE_2__["UserRegistration"]();
        this.updateObj = new _user_registration__WEBPACK_IMPORTED_MODULE_2__["UserRegistration"]();
        this.file = [];
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            barterCoins: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    ngOnInit() {
        this.email = localStorage.getItem('loginEmail');
        console.log(this.email);
        // this.email = this.route.snapshot.params["email"];
        this.updateDetailsService
            .getUserDetailByEmail(this.email)
            .subscribe((data) => {
            this.employees = data;
            this.updateForm.patchValue({
                firstname: this.employees.firstname,
                lastname: this.employees.lastname,
                mobile: this.employees.mobile,
                email: this.employees.email,
                gender: this.employees.gender,
                age: this.employees.age,
                street: this.employees.street,
                city: this.employees.city,
                state: this.employees.state,
                pincode: this.employees.pincode,
                password: this.employees.password,
                barterCoins: this.employees.barterCoins
            });
            this.image = this.domSanitizer.bypassSecurityTrustResourceUrl("data:img/" + "jpg" + ";base64," + this.employees.image);
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
    handleFileInput(files) {
        this.prepareFilesList(files);
    }
    prepareFilesList(files) {
        for (const item of files) {
            item.progress = 0;
            this.file.push(item);
        }
        this.uploadFilesSimulator(0);
    }
    uploadFilesSimulator(index) {
        setTimeout(() => {
            if (index === this.file.length) {
                return;
            }
            else {
                const progressInterval = setInterval(() => {
                    if (this.file[index].progress === 100) {
                        clearInterval(progressInterval);
                        this.uploadFilesSimulator(index + 1);
                    }
                    else {
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
        if (this.file.length == 0) {
            this.updateDetailsService
                .updatewithoutPicture(this.updateObj)
                .subscribe((data) => console.log(data));
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "success",
                title: "Successfully Updated!!",
                text: "Your Profile Updated Succesfully !",
            });
            this.router.navigateByUrl("/navbar/myProfile");
            // window.location.reload();
        }
        else {
            this.updateDetailsService
                .update(this.updateObj, this.file[0])
                .subscribe((data) => console.log(data));
            // To reset the form
            // this.updateForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
UpdateDetailsComponent.ɵfac = function UpdateDetailsComponent_Factory(t) { return new (t || UpdateDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_details_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
UpdateDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateDetailsComponent, selectors: [["app-update-details"]], decls: 95, vars: 2, consts: [[1, "container"], [1, "text-primary"], [3, "formGroup"], [1, "row"], [1, "col-md-3"], [1, "text-center"], ["alt", "Add profile Photo", 1, "avatar", "img-circle", "img-thumbnail", 3, "src"], ["type", "file", "formControlName", "image", 1, "form-control", 3, "change"], [1, "col-xl-9", "col-lg-9", "col-md-12", "col-sm-12", "col-12"], [1, "card", "h-100"], [1, "card-body", 2, "border", "3px solid rgb(55, 6, 116)"], [1, "row", "gutters"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "mb-2", "text-primary"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], [1, "form-group"], ["for", "firstname"], ["type", "text", "formControlName", "firstname", "placeholder", "Enter First Name", 1, "form-control"], ["for", "lastname"], ["type", "text", "formControlName", "lastname", "placeholder", "Enter Last Name", 1, "form-control"], ["for", "phone"], ["type", "number", "formControlName", "mobile", "placeholder", "Enter Mobile number", 1, "form-control"], ["for", "email"], ["type", "text", "formControlName", "email", "placeholder", "Enter Email", "disabled", "", 1, "form-control"], ["for", "barterCoins"], ["type", "text", "formControlName", "barterCoins", "disabled", "", 1, "form-control"], ["for", "password"], ["type", "text", "formControlName", "password", "placeholder", "Enter Password", "disabled", "", 1, "form-control"], ["for", "website"], [1, "form-check"], ["type", "radio", "name", "gender", "id", "male", "value", "male", "formControlName", "gender", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "pl-lg-5"], ["type", "radio", "name", "gender", "id", "female", "value", "female", "formControlName", "gender", 1, "form-check-input"], ["for", "exampleRadios2", 1, "form-check-label"], ["for", "age"], ["type", "number", "formControlName", "age", "placeholder", "Enter Age", 1, "form-control"], [1, "mt-3", "mb-2", "text-primary"], ["for", "Street"], ["type", "name", "formControlName", "street", "placeholder", "Enter Street", 1, "form-control"], ["for", "ciTy"], ["type", "name", "formControlName", "city", "placeholder", "Enter City", 1, "form-control"], ["for", "sTate"], ["type", "text", "formControlName", "state", "placeholder", "Enter State", 1, "form-control"], ["for", "zIp"], ["type", "text", "formControlName", "pincode", "placeholder", "Pin Code", 1, "form-control"], [1, "text-right"], ["mat-raised-button", "", "type", "submit", 2, "background", "hsla(249, 95%, 60%, 0.762)", 3, "click"]], template: function UpdateDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateDetailsComponent_Template_input_change_11_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Available Coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateDetailsComponent_Template_button_click_93_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".card[_ngcontent-%COMP%]   h-100[_ngcontent-%COMP%]{\n    border: 10px solid rgb(7, 3, 12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidXBkYXRlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIGgtMTAwe1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoNywgMywgMTIpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-update-details",
                templateUrl: "./update-details.component.html",
                styleUrls: ["./update-details.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _update_details_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zetS":
/*!*******************************************************************************!*\
  !*** ./src/app/services/register-product-service/register-product.service.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProductService", function() { return RegisterProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // baseUrl="http://localhost:8083/product/api/v1/product/add";
        //   baseUrl="http://localhost:8080"
        this.baseUrl = "https://swapsquad.stackroute.io";
    }
    // public productService(product: Product){
    //   return this.httpClient.post<Product>("baseUrl",product);
    // }
    addProduct(productObject, productImage) {
        const dataObj = new FormData;
        dataObj.append('str', JSON.stringify(productObject));
        dataObj.append('file', productImage);
        return this.httpClient.post(this.baseUrl + "/productservice/api/v1/product/add", dataObj);
    }
}
RegisterProductService.ɵfac = function RegisterProductService_Factory(t) { return new (t || RegisterProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterProductService, factory: RegisterProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map