package com.stackroute.userservice.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class CustomMessage {
   
    private String email;
    private String password;
 //  private Date messageDate;

}