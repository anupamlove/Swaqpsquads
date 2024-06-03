package com.stackroute.userservice.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.stackroute.userservice.model.UserRating;
import com.stackroute.userservice.model.UserRegistration;

public interface UserRegistrationService {
	
	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException;
	public UserRegistration getById(String emp) throws UserNotFoundException;
	public void deleteEmailById(String emp);
	public UserRegistration update(UserRegistration user);


	public UserRegistration adduser(String str, MultipartFile file) throws JsonMappingException, JsonProcessingException;

	public UserRegistration addrating(UserRating add, String email);
	public UserRegistration updateuser(UserRegistration user) throws UserNotFoundException;





    

public	UserRegistration add(UserRegistration user);


}
