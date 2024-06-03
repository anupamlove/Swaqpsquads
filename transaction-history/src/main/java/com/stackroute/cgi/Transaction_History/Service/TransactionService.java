package com.stackroute.cgi.Transaction_History.Service;

import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;

import java.util.HashSet;
import java.util.List;

public interface TransactionService {

    List<Transaction> getBySellermail(String buyerEmail)throws TransactionNotFound;
    List<Transaction> getByBuyeremail(String sellerEmail)throws TransactionNotFound;


}
