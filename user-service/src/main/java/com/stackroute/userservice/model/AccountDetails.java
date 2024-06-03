package com.stackroute.userservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
@Document(collection="accountdata")
public class AccountDetails {
    @Id
    private long accountNumber;
    private String email;
    private String  expiryMonth;
//    private int amount;
    private int cvv;
    private String accountHolderName;



//public AccountDetails(long accountNumber, String email, String expiryMonth, int cvv, String accountHolderName){
//    super();
//    this.accountNumber=accountNumber;
//    this.email=email;
//    this.expiryMonth=expiryMonth;
//    this.cvv=cvv;
//    this.accountHolderName=accountHolderName;
//}

}
