package com.stackroute.productservice.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.exception.NoProductAvailableInTheRepository;
import com.stackroute.productservice.exception.NoProductExistsInTheRepository;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductNotFoundInRepository;
import com.stackroute.productservice.exception.ProvideProperProductDetails;
import com.stackroute.productservice.model.IncomingProductData;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.model.Status;
import com.stackroute.productservice.reprository.ProductRepository;
import com.stackroute.productservice.service.SequenceGeneratorService;

import lombok.extern.slf4j.Slf4j;



@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    private ProductRepository repo;
	private SequenceGeneratorService sequenceGeneratorService;
    
	@Autowired
    public ProductServiceImpl(ProductRepository repo,SequenceGeneratorService sequenceGeneratorService) {
		log.debug("Inside the ProductServiceImpl -- Constructor");
    	this.repo=repo;
    	this.sequenceGeneratorService=sequenceGeneratorService;
    }

    public List<Product> findallrepository() throws NoProductExistsInTheRepository {
    	if(repo.findAll().isEmpty()) {
    		log.error("No product exists in the repository");
    		throw new NoProductExistsInTheRepository();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- findallrepository methods");
    		return repo.findAll();
    	}
    	
    	
    }
    
    public Product addProd(Product product) throws ProductAlreadyExistException {
    	Optional<Product> prod = repo.findById(product.getPid());
		if (prod.isPresent()) {
			log.error("No product exists in the repository");
			throw new ProductAlreadyExistException();
		} else {
			log.debug("Inside the ProductServiceImpl -- addProd methods");
			return repo.save(product);
		}
    }
    
    public Product getById(int id) throws ProductNotFoundException {
    	Optional<Product> pro = repo.findById(id);
		if (pro.isPresent()) {
			log.debug("Inside the ProductServiceImpl -- getById methods");
			return pro.get();
		} else {
			log.error("Product not exists in the repository");
			throw new ProductNotFoundException();
		}
    }
    
    public List<Product> getByEmail(String id) throws ProductNotFoundException {
    	if(repo.findAllByPemail(id).isEmpty()) {
    		log.error("Product not exists in the repository");
    		throw new ProductNotFoundException();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- getByEmail methods");
    		return repo.findAllByPemail(id);
    	}
    }
    
//    public List<Product> getAllUserAvailable(){
//		return repo.findAllByPstatus("AVAILABLE");
//	}
    
    public List<Product> getAllUserAvailable() throws NoProductAvailableInTheRepository{
    	if(repo.findAllByPstatus("AVAILABLE").isEmpty()) {
    		log.error("No product is currently available");
    		throw new NoProductAvailableInTheRepository();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- getAllUserAvailable methods");
    		return repo.findAllByPstatus("AVAILABLE");
    	}
		
	}

    
    public Product setstatus(int id) throws NoProductExistsInTheRepository{
    	Optional<Product> prod = repo.findById(id);
    	if (prod.isEmpty()) {
    		log.error("Product is not in repository");
			throw new NoProductExistsInTheRepository();
		} else {
			log.debug("Inside the ProductServiceImpl -- setstatus methods");
			Status z = Status.NOTAVAILABLE;
	    	Product as = prod.get();
	    	as.setPstatus(z);
	    	Product savedprod = repo.save(as);
			return savedprod;
		}
    }

//    public Product setstatus(String abc){
//    	Product ab = repo.findByPname(abc);
//    	Status z = Status.NOTAVAILABLE;
//    	ab.setPstatus(z);
//		return ab;
//
//	}
    
//    public Product update(Product prod) {
//    	Product savedprod = repo.save(prod);
//		return savedprod;
//	}
    
    public Product update(Product prod) throws ProductNotFoundInRepository {
    	int id = prod.getPid();
    	if(repo.findById(id).isEmpty()) {
    		log.error("Product is not in repository");
    		throw new ProductNotFoundInRepository();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- update methods");
    		Product savedprod = repo.save(prod);
    		return savedprod;
    	}
    	
	}
    
//    public Product addprod(String str,MultipartFile[] file) throws ProvideProperProductDetails, JsonMappingException, JsonProcessingException {
//    	if(str.isEmpty()) {
//    		log.error("Provide proper product details");
//    		throw new ProvideProperProductDetails();
//    	} else {
//    		log.debug("Inside the ProductServiceImpl -- addprod methods");
//    		ObjectMapper objectMapper = new ObjectMapper();
//    		Product prod = objectMapper.readValue(str,Product.class);
//    		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
//    		List<byte[]> imagelist = new ArrayList<>();
//    		Arrays.asList(file).stream().forEach(files -> {
//    		   try {
//    		      byte[] bytes = files.getBytes();
//    		      imagelist.add(bytes);
//    		   } catch (IOException e) {
//    		   }
//    		});
//    		prod.setImage(imagelist);
//    		repo.save(prod);
//    		return prod;
//    	}
//    	
//    	
//    	
//	}
    
    public Product addprod(String str,MultipartFile file) throws ProvideProperProductDetails, JsonMappingException, JsonProcessingException {
    	if(str.isEmpty()) {
    		log.error("Provide proper product details");
    		throw new ProvideProperProductDetails();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- addprod methods");
    		ObjectMapper objectMapper = new ObjectMapper();
    		Product prod = objectMapper.readValue(str,Product.class);
    		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
    		try {
				prod.setImage(file.getBytes());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    		repo.save(prod);
    		return prod;
    		
    		
    	}
    	
    	
    	
	}

	public IncomingProductData outmodel(Product pro) {
		// TODO Auto-generated method stub
		IncomingProductData prod = new IncomingProductData();
		prod.setProductId(pro.getPid());
		prod.setProductOwnerEmail(pro.getPemail());
		prod.setProductName(pro.getPname());
		prod.setState(pro.getPstate());
		prod.setCity(pro.getPcity());
		prod.setProductCategory(pro.getPcategory());
		prod.setProductImage(pro.getImage());
		prod.setPdatepost(pro.getPdatepost());
		prod.setPexchangetype(pro.getPexchangetype().toString());
		return prod;
	}

	public List<Product> getByEmailAvailable(String id) throws ProductNotFoundException {
    	if(repo.findAllByPemail(id).isEmpty()) {
    		log.error("Product not exists in the repository");
    		throw new ProductNotFoundException();
    	} else {
    		List<Product> abc = repo.findAllByPemail(id);
    		List<Product> email = new ArrayList();
    		for(int i=0;i<abc.size();i++) {
    			if(abc.get(i).getPstatus()==Status.AVAILABLE) {
    				email.add(abc.get(i));
    				
    			}
    		}
    		return email;
    	}
    }
	
	public Product getByName(String id) throws ProductNotFoundException {
		if(repo.findAllByPname(id).isEmpty()) {
    		log.error("Product not exists in the repository");
    		throw new ProductNotFoundException();
    	} else {
    		log.debug("Inside the ProductServiceImpl -- getByEmail methods");
    		return repo.findByPname(id);
    	}
	}
}
