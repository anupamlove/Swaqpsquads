package com.stackroute.email.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
 

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {
    private String recipient;
    private String msgBody = "Thank you for ordering from SwapSqad.\r\n"
    		+ "\r\n"
    		+ "Your order has been placed for exchange.\r\n"
    		+ "\r\n"
    		+ "You can see all your transcation at any time by visiting Your Account.\r\n"
    		+ "\r\n"
    		+ "If you were interested in product, you might also like other products available on swapsqad\r\n"
    		+ "\r\n"
    		+ "We hope you enjoyed your shopping experience with us and that you will visit us again soon.\r\n"
    		+ "\r\n"
    		+ "Thanks & Regards \r\n"
    		+ "Team SwapSqad";
    private String subject = "Congratulations,Order placed successfully.";
}
