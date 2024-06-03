package com.stackroute.productservice.model;


import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class IncomingProductData {
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
