package com.stackroute.recommendationservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stackroute.recommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.IncomingProductData;
import org.reactivestreams.Publisher;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;

public interface RecommendationService {
    void deleteProductNode(int productId);
    void  createNode(IncomingProductData incomingData)throws ProductAlreadyExistException;
    HashSet<IncomingProductData> getProductRecommendationsByLocation(String state)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductRecommendationByStateAndCategory(String state,String category)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductByCategory(String category)throws ProductNotFoundException;
   public ArrayList<IncomingProductData> getAllProduct();




//   public IncomingProductData data1(IncomingProductData user);


    //void createImageNode(IncomingProductData Data, MultipartFile file) throws ProductNotFoundException, IOException;
//    IncomingProductData addproduct(String str, MultipartFile file) throws JsonProcessingException, ProductNotFoundException;
}
