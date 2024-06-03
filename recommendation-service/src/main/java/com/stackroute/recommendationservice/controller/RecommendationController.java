package com.stackroute.recommendationservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.recommendationservice.model.CustomMessage;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;

import com.stackroute.recommendationservice.service.RecommendationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
@Slf4j
@RestController
//@RequestMapping()
//@CrossOrigin("*")
public class RecommendationController {
    private RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }



    @GetMapping("test")
    public String test() {
        return "hello";
    }

    @GetMapping("/recommend/{state}")
    public ResponseEntity<?> getProductRecommendationsByLocation(@PathVariable String state) {
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationsByLocation(state);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/recommendCategory")
    public ResponseEntity<?> getProductRecommendationByStateAndCategory(@RequestParam("state") String state, @RequestParam("category") String category) {
        log.debug("state:category" + state + category);
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationByStateAndCategory(state, category);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }

    @PostMapping("add")
    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData) {
        try {
            log.debug("data:" + incomingData);
            CustomMessage messages = new CustomMessage(incomingData.getProductId(), incomingData.getProductName(), incomingData.getProductCategory(),
                    incomingData.getState(), incomingData.getCity(), incomingData.getProductOwnerEmail(),
                    incomingData.getProductImage(),incomingData.getPdatepost(),incomingData.getPexchangetype());
//            publisher.publishMessage(messages);
          this.recommendationService.createNode(incomingData);
            return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
        } catch (ProductAlreadyExistException e) {
            // TODO Auto-generated catch block
            log.error("(ProductAlreadyExist", e);
            return new ResponseEntity("Product already Exist", org.springframework.http.HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProductNode(@PathVariable int productId) {
        this.recommendationService.deleteProductNode(productId);
        return new ResponseEntity<>("Product is delete successfully", HttpStatus.OK);
    }

    @GetMapping("/Product")
    public ResponseEntity<?> getProductByCategory(@RequestParam("category") String category) {
        log.debug("category" + category);
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductByCategory(category);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/getAllProduct")
    public ResponseEntity<?> getAllProduct() {
        ArrayList<IncomingProductData> rec = this.recommendationService.getAllProduct();
        return new ResponseEntity<>(rec, HttpStatus.OK);
    }


//    @PostMapping("/user")
//    public ResponseEntity<IncomingProductData> registerUser(@RequestBody IncomingProductData user) {
//
//        try {
//
//
//            return new ResponseEntity<IncomingProductData>(recommendationService.data1(user),
//                    HttpStatus.CREATED);
//        } catch (ProductNotFoundException e) {
//            // TODO Auto-generated catch block
//
//            return new ResponseEntity("User already Exist", HttpStatus.CONFLICT);
//        }
//    }
}


//    @PostMapping("/update/add")
//    public ResponseEntity<IncomingProductData> updateproductImage(@RequestParam(value = "Data")  IncomingProductData Data, @RequestParam(value = "file") MultipartFile file) throws IOException, ProductNotFoundException {
//
//        log.debug("data:file" + Data + file);
//
//        return new ResponseEntity<IncomingProductData>(recommendationService.createImageNode(Data,file),org.springframework.http.HttpStatus.OK);
//
//
//        ResponseEntity<>("Added in data base",HttpStatus.OK);




