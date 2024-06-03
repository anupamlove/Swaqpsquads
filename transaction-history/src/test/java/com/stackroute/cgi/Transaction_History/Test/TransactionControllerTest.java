package com.stackroute.cgi.Transaction_History.Test;

import com.stackroute.cgi.Transaction_History.Model.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class TransactionControllerTest {
    @Mock
    private TransactionServiceImplementationTest Service;

    @InjectMocks
    private  TransactionControllerTest controller;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp(){
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void givenNewTransactionWhenPostThenReturnUserJSON() throws Exception {
        Transaction user = new
                Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger","ProductExchanged",0.0,"Headphone exchanging only", null);
        when(Service.addNew(any())).thenReturn("Transaction Added");
        mockMvc.perform(post("/users/user") .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                "{\"transactionId\":8779,\"date\":\"2022-08-18T03:52:25.237+00:00\",\"buyerEmail\": \"nv@gmail.com\",\"sellerEmail\": \"g@gmail.com\",\"productSend\": \"Bluetooth\"," +
                                        "\"productObtained\": \"Charger\",\"method_of_Transaction\": \"ProductExchanged\",\"price_of_Product_in_coins\": 0.0," +
                                        "\"historyDetails\": \"Headphone exchanging only\",\"exchangeProductList\": null}"
                        )) .andExpect(status().isCreated())
                .andExpect(jsonPath("$.buyerEmail").value("gsfj@gmail.com ")); }






}
