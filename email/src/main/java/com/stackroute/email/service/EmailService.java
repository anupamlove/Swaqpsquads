package com.stackroute.email.service;

import com.stackroute.email.model.EmailDetails;

public interface EmailService {
 String sendMail(EmailDetails details);
}
