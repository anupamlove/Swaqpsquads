package com.stackroute.userservice.test.controller;


import com.stackroute.userservice.controller.AccountController;
import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.service.AccountService;
import com.stackroute.userservice.service.UserAlreadyExistException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class AccountControllerTest {

    @Mock
   private AccountService Service;

    @InjectMocks
    private AccountController Controller;
    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(Controller).build();
    }
@Test
    public void givenNewAccountWhenPostThenReturnUserJSON() throws Exception{
        AccountDetails acc= new AccountDetails(987659433, "ravi@gmail.com", "02/29", 898, "ravi");
    when(Service.add(any())).thenReturn(acc);
    mockMvc.perform(post("/users/addaccount").contentType(MediaType.APPLICATION_JSON).content(
                    "{\"accountNumber\":987659433,\"email\":\"ravi@gmail.com\",\"expiryMonth\":\"02/29\",\"cvv\":898,\"accountHolderName\":\"ravi\"}"))
            .andExpect(status().isCreated()).andExpect(jsonPath("$.accountNumber").value(987659433));
}

    @Test
    public void givenDuplicateUserWhenPostThenReturnErrorMessage() throws Exception {
        when(Service.add(any())).thenThrow(UserAlreadyExistException.class);
        mockMvc.perform(post("/users/addaccount").contentType(MediaType.APPLICATION_JSON).content(
                        "{\"accountNumber\":987659433,\"email\":\"ravi@gmail.com\",\"expiryMonth\":\"02/29\",\"cvv\":898,\"accountHolderName\":\"ravi\"}"))
                .andExpect(status().isConflict()).andExpect(content().string("User already Exist"));
    }
    }

