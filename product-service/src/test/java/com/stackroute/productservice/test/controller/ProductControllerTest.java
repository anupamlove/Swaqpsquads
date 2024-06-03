package com.stackroute.productservice.test.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

import com.stackroute.productservice.controller.ProductController;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.service.ProductServiceImpl;




@ExtendWith(MockitoExtension.class)
public class ProductControllerTest {
	
	@Mock
    private ProductServiceImpl Service;

    @InjectMocks
    private ProductController Controller;

    @Autowired
    private MockMvc mockMvc;


    @BeforeEach
    public void setUp(){
        mockMvc = MockMvcBuilders.standaloneSetup(Controller).build();
    }
    
    @Test
    public void givenNewUserWhenPostThenReturnUserJSON() throws Exception {
    	Product prod = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
        when(Service.addProd(any())).thenReturn(prod);
        mockMvc.perform(post("/api/v1/product")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"pid\":1,\"pemail\":\"vijay@gmail.com\",\"pname\":\"mobile\",\"pstate\":\"Azamgarh\",\"desc\":\"IT IS A MOBILE\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.pemail").value("vijay@gmail.com"));
    }
    
    @Test
    public void givenDuplicateProductWhenPostThenReturnErrorMessage() throws Exception {
        when(Service.addProd(any())).thenThrow(ProductAlreadyExistException.class);
        mockMvc.perform(post("/api/v1/product")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"pid\":1,\"pemail\":\"vijay@gmail.com\",\"pname\":\"mobile\",\"pstate\":\"Azamgarh\",\"desc\":\"IT IS A MOBILE\"}"))
                .andExpect(status().isConflict())
                .andExpect(content().string("Product already Exist"));
    }


}
