package com.stackroute.cgi.Transaction_History.Controller;
import com.stackroute.cgi.Transaction_History.Exception.TransactionIdNotFound;

import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import com.stackroute.cgi.Transaction_History.Service.IdGeneratorService;
import com.stackroute.cgi.Transaction_History.Service.TransactionService;
import com.stackroute.cgi.Transaction_History.Service.TransactionServiceImplementation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
//@CrossOrigin(origins="*")
@Slf4j
public class TransactionController {
@Autowired
	 TransactionRepository repositry;
    @Autowired
    private IdGeneratorService idGeneratorService;

@Autowired
TransactionServiceImplementation transactionService;
//Add Transactions
	@PostMapping ("/addTransaction")
	//generate sequence
    public Transaction saveTransaction(@RequestBody Transaction transaction){
        System.out.println(transaction);
        Transaction sc = new Transaction();

		transaction.setTransactionId(idGeneratorService.getNextSequence("user_sequence"));
		return repositry.save(transaction);
			

}
//// Find all the transactions
//    @GetMapping("/findTransactions")
//    public Optional<Transaction> gettransaction(@PathVariable int transactionId){
//        return  repositry.findAll(transactionId);
//    }
	//Find by transactionId
    @GetMapping("/findTransactions/{transactionId}")
    public ResponseEntity<?> getByTransactionId(@PathVariable int transactionId){
    try {
        return  new ResponseEntity<>(transactionService.getByTransactionId(transactionId),HttpStatus.OK);
    }
    catch (TransactionIdNotFound transactionIdNotFound){
        return new ResponseEntity<>("Transaction Id not Exists",HttpStatus.NOT_FOUND);
    }
    }	
 //Find by SellerMail
// @GetMapping("/findBySellerEmail/{sellerEmail}")
// public ResponseEntity<?> findBySellerEmail(@PathVariable String sellerEmail) {
//     try{
//         return new ResponseEntity<>(transactionService.getBySellerEmail(sellerEmail),HttpStatus.OK);
//     }
//     catch (TransactionNotFound transactionNotFound){
//         return new ResponseEntity<>("Transaction is not done by this email",HttpStatus.NOT_FOUND);
//     }
//    }
    @GetMapping("/SellerEmail/{sellerEmail}")
    public ResponseEntity<?> getBySelleremail(@PathVariable String sellerEmail) {

        try {
            List<Transaction> byChat = this.transactionService.getBySellermail(sellerEmail);
            return new ResponseEntity<>(byChat, HttpStatus.OK);
        } catch (TransactionNotFound e) {
            return new ResponseEntity("Transaction is not done by this email", HttpStatus.CONFLICT);
        }
    }

     //Find by BuyerMail
     @GetMapping("/BuyerEmail/{buyerEmail}")
     public ResponseEntity<?> getByBuyeremail(@PathVariable String buyerEmail) {

         try {
             List<Transaction> byChat = this.transactionService.getByBuyeremail(buyerEmail);
             return new ResponseEntity<>(byChat, HttpStatus.OK);
         } catch (TransactionNotFound e) {
             return new ResponseEntity("Transaction is not done by this email", HttpStatus.CONFLICT);
         }
     }
//    @GetMapping("/findByBuyerEmail/{buyerEmail}")
//    public ResponseEntity<?> findByBuyerEmail(@PathVariable String buyerEmail){
//        try {
//            return new ResponseEntity<>(transactionService.getByBuyerEmail(buyerEmail),HttpStatus.OK);
//        }
//        catch (TransactionNotFound transactionNotFound){
//            return new ResponseEntity<>("Transaction is not done by this email",HttpStatus.NOT_FOUND);
//        }
//    }
//        //for deleting Transaction
//    @DeleteMapping("/delete/{transactionId}")
//    public  String deleteTransaction(@PathVariable int transactionId){
//    	repositry.deleteById(transactionId);
//    return  "Transaction deleted with id:"+transactionId;
//
//    }


 }