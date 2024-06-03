package com.stackroute.userservice.controller;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.service.AccountService;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;

@RestController
@RequestMapping("/users")
//@CrossOrigin(origins="*")
@Slf4j
public class AccountController {
    @Autowired
    private AccountService accservice;


  @PostMapping("/addaccount")
   public ResponseEntity<AccountDetails> saveuser (@RequestBody AccountDetails adduser){
      try {
          log.debug("saveUser");
          return new ResponseEntity<AccountDetails>(accservice.add(adduser), org.springframework.http.HttpStatus.CREATED);
      }catch (UserAlreadyExistException e){
          log.error("(UserAlreadyExist",e);
          return new ResponseEntity("User already Exist", org.springframework.http.HttpStatus.CONFLICT);
      }
   }


    @GetMapping("/{accountNumber}")
    public ResponseEntity<AccountDetails> getAccountDataByAccountNumber(@PathVariable long accountNumber) {
        try {
            log.debug("Inside the AccountController -- ById methods");
            return new ResponseEntity<AccountDetails>(accservice.getById(accountNumber), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            log.error("user not found.", e);
            return new ResponseEntity("user Not Found", HttpStatus.NOT_FOUND);
        }
    }

@GetMapping("/account/{email}")
  public ResponseEntity<?> getAccountDataByEmail (@PathVariable String email){
      try {
          log.debug("Inside the AccountController -- ById methods");
          HashSet<AccountDetails> getacc = this.accservice.getAccountDataByEmail(email);
          return new ResponseEntity<>(getacc, HttpStatus.OK);
      }catch (UserNotFoundException e) {
          log.error("user not found");
          // TODO Auto-generated catch block
          return new ResponseEntity("User Not found", org.springframework.http.HttpStatus.NOT_FOUND);
      }
  }

  @PutMapping("/addcoin")
  public ResponseEntity<?> addCoin ( @RequestParam ("amount") int amount, @RequestParam ("email") String email){

      return new ResponseEntity<>(accservice.addcoin(amount,email), HttpStatus.OK);

  }
  @PutMapping("/exchhange")
  public ResponseEntity<?> exchnage (@RequestParam ("buyeremail") String buyeremail, @RequestParam ("selleremail") String selleremail,@RequestParam ("newTotalCoins") int coinOfProduct){
      return new ResponseEntity<>(accservice.exchange(buyeremail,selleremail,coinOfProduct),HttpStatus.OK);
  }
 @PutMapping("withdraw")
  public ResponseEntity<?> withdraw (@RequestParam ("amountWithdraw") int amountWithdraw, @RequestParam ("email") String email){
      return  new ResponseEntity<>(accservice.withdraw(amountWithdraw,email),HttpStatus.OK);
  }


}
