package com.stackroute.recommendationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.amqp.core.Exchange;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.util.Date;

@Node
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IncomingProductData {
    @Id
    private int productId;
    private String productOwnerEmail;
    private String productName;
    private String state;
    private String city;
    private String productCategory;
    private byte[] productImage;
    private Date pdatepost;
    private String pexchangetype;

    public IncomingProductData(int productId, String state, String city, String productCategory) {
        super();
        this.productId = productId;
        this.state = state;
        this.city = city;
        this.productCategory = productCategory;
    }

    public IncomingProductData(int productId, String city, String productCategory) {
        super();
        this.productId = productId;
        this.city = city;
        this.productCategory = productCategory;
    }

    public IncomingProductData(int productId, String productOwnerEmail, String productName, String state, String city, String productCategory) {
        this.productId = productId;
        this.productOwnerEmail = productOwnerEmail;
        this.productName = productName;
        this.state = state;
        this.city = city;
        this.productCategory = productCategory;
    }


}

