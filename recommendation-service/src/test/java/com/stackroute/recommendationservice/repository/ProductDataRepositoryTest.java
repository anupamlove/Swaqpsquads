package com.stackroute.recommendationservice.repository;


import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.model.Location;
import org.apache.catalina.Store;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.neo4j.core.Neo4jOperations;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProductDataRepositoryTest {
    @Autowired
    private ProductDataRepository productDataRepository;


    @Test
    void getProductRecommendationByLocation() {
        IncomingProductData location1=new IncomingProductData(1,"Raebareli","UP","Automobiles");
        IncomingProductData addedlocation1=productDataRepository.save(location1);
    assertEquals(location1.getProductId(),addedlocation1.getProductId(),"New Location should be saved and the same should be returned");
    }

    @Test
    void getProductRecommendationByCityAndCategory() {
           IncomingProductData data =new IncomingProductData(2,"Varanasi","Electronics");
        IncomingProductData addeddata=productDataRepository.save(data);
        assertEquals(data.getProductId(),addeddata.getProductId(),"New Category and city should be saved and the same should be returned");
    }

    @Test
    void getProductByCategory() {
        IncomingProductData category1=new IncomingProductData(2,"Varanasi","UP","Clothing");
        IncomingProductData addedcategory1=productDataRepository.save(category1);
        assertEquals(category1.getProductId(),addedcategory1.getProductId(),"New Category should be saved and the same should be returned");

    }
}