package com.stackroute.recommendationservice.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.amqp.core.Exchange;

import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class CustomMessage {

    private int productId;
    private String productOwnerEmail;
    private String productName;
    private String state;
    private String city;
    private String productCategory;
    private byte[] productImage;
    private Date pdatepost;
    private String pexchangetype;


}