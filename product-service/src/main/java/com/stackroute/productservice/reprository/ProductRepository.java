package com.stackroute.productservice.reprository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.productservice.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, Integer> {
     

	List<Product> findAllByPstatus(String abc);
	Product findByPname(String abc);
	List<Product> findAllByPemail(String email);
	Product findByPemail(String abc);
	List<Product> findAllByPname(String abc);
}
