package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.repository.ProductDataRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@SpringBootTest
@ExtendWith(MockitoExtension.class)
class RecommendationServiceImpTest {
    @Mock
      ProductDataRepository productDataRepository;
    @InjectMocks
    RecommendationServiceImp recommendationServiceImp;
    @Test
    void createNode() throws ProductNotFoundException {
        IncomingProductData data = new IncomingProductData(1,"raju@gmail.com","Bike","UP","Barabanki","Automobiles");
        Optional<IncomingProductData> optionalData=Optional.of(data);
        when(productDataRepository.findById(1)).thenReturn(optionalData);
        IncomingProductData retreivedData=recommendationServiceImp.getById(1);
        assertEquals(data.getProductId(),retreivedData.getProductId(),"should create node for valid data");
    }

    @Test
    void getProductRecommendationsByLocation() throws ProductNotFoundException {
        Optional<IncomingProductData> optionalData=Optional.empty();
        when(productDataRepository.findById(1)).thenReturn(optionalData);
        assertThrows(ProductNotFoundException.class,()->{
            recommendationServiceImp.getById(1);
        });

    }

    @Test
    void getProductRecommendationByCityAndCategory()  throws ProductNotFoundException {
        Optional<IncomingProductData> optionalData=Optional.empty();
        when(productDataRepository.findById(1)).thenReturn(optionalData);
        assertThrows(ProductNotFoundException.class,()->{
            recommendationServiceImp.getById(1);
        });

    }

    @Test
    void getProductByCategory() throws ProductNotFoundException {
        Optional<IncomingProductData> optionalData=Optional.empty();
        when(productDataRepository.findById(1)).thenReturn(optionalData);
        assertThrows(ProductNotFoundException.class,()->{
            recommendationServiceImp.getById(1);
        });
    }
    @Test
    void givenNewProductWhenSavedShouldReturnProduct() throws ProductAlreadyExistException{
        IncomingProductData data = new IncomingProductData(1,"raju@gmail.com","Bike","UP","Barabanki","Automobiles");
        Optional<IncomingProductData> optionalData=Optional.empty();
        when(productDataRepository.findById(1)).thenReturn(optionalData);
        IncomingProductData addeddata=recommendationServiceImp.addNew(data);
        verify(productDataRepository,times(1)).findById(1);
        verify(productDataRepository,times(1)).save(data);
    }
}