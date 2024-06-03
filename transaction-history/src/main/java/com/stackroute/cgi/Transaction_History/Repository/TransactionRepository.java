package com.stackroute.cgi.Transaction_History.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import com.stackroute.cgi.Transaction_History.Model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface TransactionRepository extends MongoRepository<Transaction, Integer> {

//Optional<Transaction> findBySellerEmail(String sellerEmail);
//    Optional<Transaction> findByBuyerEmail(String buyerEmail);

List<Transaction> findBySellerEmail(String sellerEmail);
    List<Transaction> findByBuyerEmail(String sellerEmail);

	Transaction getBybuyerEmail(String buyerEmail);


//    Object getTransactionbyTransactionId(int i);
}
