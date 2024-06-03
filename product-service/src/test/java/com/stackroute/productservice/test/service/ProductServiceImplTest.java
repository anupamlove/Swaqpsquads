package com.stackroute.productservice.test.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.reprository.ProductRepository;
import com.stackroute.productservice.service.ProductServiceImpl;






@ExtendWith(MockitoExtension.class)
public class ProductServiceImplTest {
	
	@Mock
    ProductRepository Repository;

    @InjectMocks
    ProductServiceImpl Service;


    @Test
    public void givenValidProductIDThenShouldReturnProduct() throws ProductNotFoundException {
    	Product prod = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
        Optional<Product> optionalProd = Optional.of(prod);
        when(Repository.findById(1)).thenReturn(optionalProd);
        Product retreivedProd = Service.getById(1);
        assertEquals(prod.getPemail(), retreivedProd.getPemail(),"should return Product for valid id of exixting Product");
    }

    @Test
    public void givenInValidProductIDThenShouldThrowException() throws ProductNotFoundException {
        Optional<Product> optionalProd = Optional.empty();
        when(Repository.findById(1)).thenReturn(optionalProd);
        assertThrows(ProductNotFoundException.class,()->{
            Service.getById(1);});
    }
    
    @Test
    public void givenNewProductrWhenSavedShouldReturnProduct() throws ProductAlreadyExistException {
    	Product prod = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
        Optional<Product> optionalProd = Optional.empty();
        when(Repository.findById(1)).thenReturn(optionalProd);
        Product addedProd = Service.addProd(prod);
        verify(Repository,times(1)).findById(1);
        verify(Repository,times(1)).save(prod);
    }
    
    @Test
    public void givenDuplicateProductWhenSavedShouldThrowException() throws ProductAlreadyExistException {
    	Product prod = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
        Optional<Product> optionalProd = Optional.of(prod);
        when(Repository.findById(1)).thenReturn(optionalProd);
        assertThrows(ProductAlreadyExistException.class,()->{
            Service.addProd(prod);});
        verify(Repository,times(1)).findById(1);
        verify(Repository,times(0)).save(prod);
    }
}
