package com.stackroute.recommendationservice.model.config;


import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.service.RecommendationService;
import com.stackroute.recommendationservice.service.RecommendationServiceImp;
@Component

public class Consumer {
	@Autowired
	  private RecommendationServiceImp  recommendation;
	 @RabbitListener(queues = RabbitMq.QUEUE)
	    public void consumeMessageFromQueue(IncomingProductData orderStatus) {
	        //System.out.println("Message recieved from queue : " + orderStatus);
	        
	        recommendation.createNode(orderStatus);
	        
	    }
	 
}
