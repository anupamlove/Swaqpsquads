package com.stackroute.productservice.service;

import java.util.List;

import com.stackroute.productservice.exception.NoProductAvailableInTheRepository;
import com.stackroute.productservice.exception.NoProductExistsInTheRepository;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductNotFoundInRepository;
import com.stackroute.productservice.model.Product;

public interface ProductService {
	public Product addProd(Product product) throws ProductAlreadyExistException;
	public Product getById(int id) throws ProductNotFoundException;
	public List<Product> getAllUserAvailable() throws NoProductAvailableInTheRepository;
	public Product setstatus(int id) throws NoProductExistsInTheRepository;
	public Product update(Product prod) throws ProductNotFoundInRepository;

}
