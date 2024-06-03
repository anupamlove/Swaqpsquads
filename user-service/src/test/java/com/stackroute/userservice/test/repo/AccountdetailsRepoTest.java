package com.stackroute.userservice.test.repo;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
@SpringBootTest
public class AccountdetailsRepoTest {
    @Autowired
    AccountdetailsRepo Repository;

    @Test
    public void getaccountDetailsByEmail(){
        AccountDetails acc= new AccountDetails(  987659433,"ravi@gmail.com", "02/29", 898, "ravi");
        AccountDetails Acd= Repository.save(acc);
        assertEquals(acc.getEmail(),Acd.getEmail(),"account by email");
    }

}
