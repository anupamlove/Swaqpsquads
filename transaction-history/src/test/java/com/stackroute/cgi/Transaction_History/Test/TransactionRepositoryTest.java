package com.stackroute.cgi.Transaction_History.Test;

import com.stackroute.cgi.Transaction_History.Exception.TransactionIdNotFound;
import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import com.stackroute.cgi.Transaction_History.Service.TransactionService;
import com.stackroute.cgi.Transaction_History.Service.TransactionServiceImplementation;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@SpringBootTest
public class TransactionRepositoryTest {
    @Autowired
    TransactionRepositoryTest Repository;
    TransactionService Service;



    @Test
    public void getTransactionbysellerEmail() throws TransactionNotFound {
        { Transaction user = new
                Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger",
                "ProductExchanged",0.0,"Headphone exchanging only",null); Optional<Transaction> optionalUser = Optional.of(user);
            where((String) Repository.findBySellerEmail("ghbnj@gmail.com"));
            Transaction retreivedUser = (Transaction) Service.getBySellermail("ghbnj@gmail.com");
            assertEquals(user.getSellerEmail(),
                    retreivedUser.getSellerEmail(),"Display All transactions");
        }
    }

    private Object findBySellerEmail(String s) {
        return "All the transactions retrived";
    }

    @Test
    public void getTransactionbybuyerEmail() throws TransactionNotFound {
        { Transaction user = new
                Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger",
                "ProductExchanged",0.0,"Headphone exchanging only",null); Optional<Transaction> optionalUser = Optional.of(user);
            where((String) Repository.findBySellerEmail("ghbnj@gmail.com"));
            Transaction retreivedUser = (Transaction) Service.getByBuyeremail("ghbnj@gmail.com");
            assertEquals(user.getSellerEmail(),
                    retreivedUser.getBuyerEmail(),"Display All transactions");
        }
    }
    @Test
    public void  TransactionisNotDoneBySellerEmail () throws TransactionNotFound {
        Optional<Transaction> optionalUser =
                Optional.empty();
        where((String) Repository.findBySellerEmail("ghbnj@gmail.com"));
        assertThrows(TransactionNotFound.class,()->{
            Service.getBySellermail("ghbnj@gmail.com");}); }

    @Test
    public void  TransactionisNotDoneByBuyerEmail () throws TransactionNotFound {
        Optional<Transaction> optionalUser =
                Optional.empty();
        where((String) Repository.findByBuyerEmail("ghbnj@gmail.com"));
        assertThrows(TransactionNotFound.class,()->{
            Service.getByBuyeremail("ghbnj@gmail.com");}); }

    private Object findByBuyerEmail(String s) {
        return "transaction Not done";
    }


}
