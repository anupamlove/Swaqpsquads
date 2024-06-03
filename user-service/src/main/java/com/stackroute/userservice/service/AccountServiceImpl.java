package com.stackroute.userservice.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    private AccountdetailsRepo accrepo;
    @Autowired
    private UserRepo userrep;


    @Override
    public AccountDetails add(AccountDetails adduser) throws UserAlreadyExistException  {
        Optional<AccountDetails> userdata =accrepo.findById(adduser.getAccountNumber());
        if(userdata.isPresent()){
            throw new UserAlreadyExistException();
        }else{
            return accrepo.save(adduser);
        }
    }

    @Override
        public HashSet<AccountDetails> getAccountDataByEmail(String email) throws UserNotFoundException  {
            HashSet<AccountDetails> getacc= accrepo.getAccountDataByEmail(email);
            if(getacc.isEmpty()){
                throw new UserNotFoundException();
            }else {
                return getacc;
            }
    }

    @Override
     public UserRegistration addcoin(int amount, String email) {
        UserRegistration ad = userrep.findById(email).get();
        int coin= amount/10;
        int newTotalCoin = ad.getBarterCoins() + coin;
        ad.setBarterCoins(newTotalCoin);
       return userrep.save(ad);



    }

    @Override
    public String  exchange(String buyeremail, String selleremail, int coinOfProduct) {
        UserRegistration add = userrep.findById(selleremail).get();
        int sellercoins = add.getBarterCoins()+  coinOfProduct;
        add.setBarterCoins(sellercoins);

        UserRegistration x = userrep.findById(buyeremail).get();
       int buyerCoins = x.getBarterCoins()- coinOfProduct;
       x.setBarterCoins(buyerCoins);
 userrep.save(add);
  userrep.save(x);
  return  "Succesful";



    }
    @Override
    public UserRegistration withdraw(int amountWithdraw, String email) {
        UserRegistration y=userrep.findById(email).get();

      int balance =  y.getBarterCoins() - amountWithdraw;
      y.setBarterCoins(balance);
      return userrep.save(y);

    }

    @Override
    public AccountDetails getById(long accountNumber) throws UserNotFoundException {
        Optional<AccountDetails> accountnum = accrepo.findById(accountNumber);
        if(accountnum.isPresent()){
            return accountnum.get();
        }else{
            throw new UserNotFoundException();
        }


    }


}
