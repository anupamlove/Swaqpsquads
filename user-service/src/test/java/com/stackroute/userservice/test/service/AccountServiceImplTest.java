package com.stackroute.userservice.test.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.service.AccountServiceImpl;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AccountServiceImplTest {
    @Mock
    AccountdetailsRepo Repository;
    @InjectMocks
    AccountServiceImpl Service;

    @Test
    public void givenNewAccountWhenSavedShouldReturnAccount() throws UserAlreadyExistException {
        AccountDetails acc = new AccountDetails(987659433, "ravi@gmail.com", "02/29", 898, "ravi");
        Optional<AccountDetails> Optionalacc = Optional.empty();
        when(Repository.findById(987659433L)).thenReturn(Optionalacc);
        AccountDetails addedacc = Service.add(acc);
        verify(Repository, times(1)).findById(987659433L);
        verify(Repository, times(1)).save(acc);

    }

    @Test
    public void givenValidAccountNumberThenShouldReturnAccountData() throws UserNotFoundException {
        AccountDetails acc = new AccountDetails(987659433, "ravi@gmail.com", "02/29", 898, "ravi");
        Optional<AccountDetails> optionalacc = Optional.of(acc);
        when(Repository.findById(987659433L)).thenReturn(optionalacc);
        AccountDetails retreivedacc = Service.getById(987659433L);
        assertEquals(acc.getEmail(), retreivedacc.getEmail(), "should return Account Details for valid Account Number of exixting user");
    }

    @Test
    public void givenDuplicateAccNumWhenSavedShouldThrowException() throws UserAlreadyExistException {
        AccountDetails acc = new AccountDetails(987659433, "ravi@gmail.com", "02/29", 898, "ravi");
        Optional<AccountDetails> optionalUser = Optional.of(acc);
        when(Repository.findById(987659433L)).thenReturn(optionalUser);
        assertThrows(UserAlreadyExistException.class, () -> {
            Service.add(acc);
        });
        verify(Repository, times(1)).findById(987659433L);
        verify(Repository, times(0)).save(acc);
    }

}
