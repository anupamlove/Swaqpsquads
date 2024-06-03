package com.stackroute.productservice.test.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.reprository.ProductRepository;


@SpringBootTest
public class ProductRepositoryTest {
	
	@Autowired
    ProductRepository Repository;


    @Test
    public void givenNewProdWhenSavedThenReturnUser(){
    	Product pro = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
    	Product adddedpro = Repository.save(pro);
        assertEquals(pro.getPname(), adddedpro.getPname(), "New Product should be saved and the same should be returned");
    }
    
    @Test
    public void givenInValidUserIdThenReturnEmptyOptional(){
        assertTrue(Repository.findById(20).isEmpty());
    }


    @Test
    public void givenValidUserIdThenReturnUserOptional(){
    	Product user = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
        Repository.save(user);
        assertTrue(Repository.findById(1).isPresent());
    }
    
    @Test
    public void givenNewProductWhenSavedThenReturnProductemail(){
    	Product pro = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
    	Product adddedpro = Repository.save(pro);
        assertEquals(pro.getPemail(), adddedpro.getPemail(), "New Product should be saved and the same should be returned");
    }
    
    @Test
    public void givenNewProductWhenSavedThenReturnlocation(){
    	Product pro = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
    	Product adddedpro = Repository.save(pro);
        assertEquals(pro.getPstate(), adddedpro.getPstate(), "New Product should be saved and the same should be returned");
    }
    
    @Test
    public void givenNewProductWhenSavedThenReturnDescripion(){
    	Product pro = new Product(1,"vijay@gmail.com","mobile","Azamgarh","IT IS A MOBILE");
    	Product adddedpro = Repository.save(pro);
        assertEquals(pro.getDesc(), adddedpro.getDesc(), "New Product should be saved and the same should be returned");
    }

}
