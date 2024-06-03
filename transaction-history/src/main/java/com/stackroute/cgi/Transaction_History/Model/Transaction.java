package com.stackroute.cgi.Transaction_History.Model;

import java.util.Date;
import java.util.List;

import lombok.Data;
import lombok.Generated;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "transaction")
@EntityScan
@Data
public class Transaction {
    @Transient

    public static final String SEQUENCE_NAME = "user_sequence";

    @Id
    private long transactionId;
    private Date date = new Date(System.currentTimeMillis());


    private String buyerEmail;
    private String sellerEmail;
    private int productSend;
    private int productObtained;
    private String method_of_Transaction;
    private Double price_of_Product_in_coins;
    private String historyDetails;
    private List<String> exchangeProductList;


    public Transaction(int transactionId, String buyerEmail, String sellerEmail, String productSend,
                       String productObtained, String method_of_Transaction,  double price_of_Product_in_coins, String historyDetails, Object o) {
    }

    public Transaction() {

    }
}
