package com.stackroute.recommendationservice.controller;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.stackroute.recommendationservice.model.IncomingProductData;

public class RecommendationControllerTest extends AbstractTest {
 @Override
         @Before
         public void setUp(){
     super.setUp();
 }
    @Test
    public void deleteProduct() throws Exception {
        String uri ="/delete/5";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status =mvcResult.getResponse().getStatus();
        assertEquals(200,status);
        String content =mvcResult.getResponse().getContentAsString();
        assertEquals(content,"Product is delete successfully");
    }
    @Test
    public void getProductsList() throws Exception {
        String uri = "/getAllProduct";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        IncomingProductData[] productlist = super.mapFromJson(content, IncomingProductData[].class);
        assertTrue(productlist.length > 0);
    }

}

