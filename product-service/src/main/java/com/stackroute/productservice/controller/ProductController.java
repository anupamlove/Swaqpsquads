package com.stackroute.productservice.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.config.RabbitMq;
import com.stackroute.productservice.exception.NoProductAvailableInTheRepository;
import com.stackroute.productservice.exception.NoProductExistsInTheRepository;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductNotFoundInRepository;
import com.stackroute.productservice.exception.ProvideProperProductDetails;
import com.stackroute.productservice.model.IncomingProductData;
import com.stackroute.productservice.model.Product;

import com.stackroute.productservice.reprository.ProductRepository;

import com.stackroute.productservice.service.ProductService;
import com.stackroute.productservice.service.ProductServiceImpl;
import com.stackroute.productservice.service.SequenceGeneratorService;

import lombok.extern.slf4j.Slf4j;


//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class ProductController {
	
	private ProductRepository prepository;
	private ProductServiceImpl pservice;
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
    private RabbitTemplate template;
	
	
    @Autowired
	public ProductController(ProductRepository prepository,ProductServiceImpl pservice,SequenceGeneratorService sequenceGeneratorService) {
		log.debug("Inside the ProductController -- constructor");
		this.prepository=prepository;
		this.pservice=pservice;
		this.sequenceGeneratorService=sequenceGeneratorService;
	}
	
	@Autowired
    @GetMapping("/product")
	public ResponseEntity<List<Product>> getAllProducts(){
		try {
			log.debug("Inside the ProductController -- getAllProducts methods");
			return new ResponseEntity<List<Product>>(pservice.findallrepository(), HttpStatus.CREATED); 
		} catch (NoProductExistsInTheRepository e) {
			log.error("Product not found",e);
			return new ResponseEntity("List not found", HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/product")
	public ResponseEntity<Product> createproduct(@RequestBody Product product) throws IOException {
		try {
			log.debug("Inside the ProductController -- createproduct methods");
			return new ResponseEntity<Product>(pservice.addProd(product), HttpStatus.CREATED);
		} catch (ProductAlreadyExistException e) {
			log.error("Product already exists.",e);
			return new ResponseEntity("Product already Exist", HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id) {
		try {
			log.debug("Inside the ProductController -- getProductById methods");
			return new ResponseEntity<Product>(pservice.getById(id), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			log.error("Product not found.",e);
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}
	
	
	@GetMapping("/producte/{emailid}")
	public ResponseEntity<List<Product>> getProductByEmail(@PathVariable String emailid) {
		try {
			log.debug("Inside the ProductController -- getProductByEmail methods");
			return new ResponseEntity<List<Product>>(pservice.getByEmail(emailid), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			log.error("Product not found.",e);
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/productn/{name}")
	public ResponseEntity<Product> getProductByName(@PathVariable String name) {
		try {
			log.debug("Inside the ProductController -- getProductByEmail methods");
			return new ResponseEntity<Product>(pservice.getByName(name), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			log.error("Product not found.",e);
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}

	
	@GetMapping("/product/a")
	public ResponseEntity<List<Product>> getProductByStatus() {
		try {
			log.debug("Inside the ProductController -- getProductByStatus methods");
			return new ResponseEntity<List<Product>>(pservice.getAllUserAvailable() , HttpStatus.FOUND);
		} catch (NoProductAvailableInTheRepository e) {
			log.error("No product is available",e);
			return new ResponseEntity("List not found", HttpStatus.CONFLICT);
		}
	}
	
	
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> setNotAvailableProductById(@PathVariable int id) {
		try {
			log.debug("Inside the ProductController -- setNotAvailableProductById methods");
			return new ResponseEntity<Product>(pservice.setstatus(id), HttpStatus.OK);
		} catch (NoProductExistsInTheRepository e) {
			log.error("No product is available by the given id",e);
			return new ResponseEntity("product is not there in repository", HttpStatus.NOT_FOUND);
		}
	}
	


	
	@PutMapping("/update")
	public ResponseEntity<Product> updateProducts(@RequestBody Product prod){
		Product prodSaved;
		try {
			log.debug("Inside the ProductController -- updateProducts methods");
			prodSaved = pservice.update(prod);
			return new ResponseEntity<Product>(prodSaved, HttpStatus.OK);
		} catch (ProductNotFoundInRepository e) {
			log.error("Product not found",e);
			return new ResponseEntity("Product is not there so cant be updated",HttpStatus.BAD_GATEWAY);
		}
	}	


	
	@PostMapping("/product/add")
	public ResponseEntity<Product> createproduct(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile file) throws IOException  {
		try {
			log.debug("Inside the ProductController -- createproduct methods");
			Product pro = pservice.addprod(str,file);
			IncomingProductData indata = pservice.outmodel(pro);
			template.convertAndSend(RabbitMq.EXCHANGE, RabbitMq.ROUTING_KEY, indata);
			return new ResponseEntity<Product>(pro,org.springframework.http.HttpStatus.OK);
		} catch (JsonMappingException e) {
			log.error("JsonMappingException",e);
			return new ResponseEntity("Json Mapping Exception",org.springframework.http.HttpStatus.BAD_REQUEST);
		} catch (JsonProcessingException e) {
			log.error("JsonProcessingException",e);
			return new ResponseEntity("Json Processing Exception",org.springframework.http.HttpStatus.CONFLICT);
		} catch (ProvideProperProductDetails e) {
			log.error("Give product details",e);
			return new ResponseEntity("Provice proper details",org.springframework.http.HttpStatus.CONFLICT);
		}
		
	}
	
	@GetMapping("/productavailablebyemail/{emailid}")
	public ResponseEntity<List<Product>> getProductByEmailAvailable(@PathVariable String emailid) {
		try {
			log.debug("Inside the ProductController -- getProductByEmail methods");
			return new ResponseEntity<List<Product>>(pservice.getByEmailAvailable(emailid), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			log.error("Product not found.",e);
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}
	
	
}