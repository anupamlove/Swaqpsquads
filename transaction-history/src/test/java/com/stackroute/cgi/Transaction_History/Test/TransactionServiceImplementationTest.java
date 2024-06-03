package com.stackroute.cgi.Transaction_History.Test;

import com.stackroute.cgi.Transaction_History.Exception.TransactionIdNotFound;
import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import com.stackroute.cgi.Transaction_History.Service.TransactionServiceImplementation;
import org.junit.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

public class TransactionServiceImplementationTest {
    TransactionRepository Repository;
    TransactionServiceImplementation Service;
    public Object addNew(Object any) {
        return "Transaction_added";
    }
//    @Test
//    public void    getTransactionbyTransactionId (int transactionId) throws TransactionIdNotFound {
//        {
//            Transaction user = new
//                    Transaction(8979, "gsfj@gmail.com", "ghbnj@gmail.com", "Bluetooth", "Charger",
//                    "ProductExchanged", 0.0, "Headphone exchanging only", null);
//            Optional<Transaction> optionalUser = Optional.of(user);
//            when(Repository.getTransactionbyTransactionId(8979));
//            Transaction retreivedUser = (Transaction) Service.getByTransactionId(8979);
//            assertEquals(user.getTransactionId(),
//                    retreivedUser.getTransactionId(), "Display All transactions");
//        }
//
//
//    }

//    @Test
//    public void   TransactionIsNotDoneByTransactionId() throws TransactionNotFound, TransactionIdNotFound {
//        Optional<Transaction> optionalUser =
//                Optional.empty();
//        when(Repository.getTransactionbyTransactionId(8779));
//        assertThrows(TransactionNotFound.class, () -> {
//            Service.getByTransactionId(8779);
//        });
//
//    }
}
