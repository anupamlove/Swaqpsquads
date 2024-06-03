package com.stackroute.email.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.email.model.EmailDetails;
import com.stackroute.email.service.EmailService;
 
@RestController
//@CrossOrigin(origins="*")
public class EmailController {
 
    @Autowired private EmailService emailService;
 
    
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails details)
    {
        String status= emailService.sendMail(details);
        return status;
    }
 
}