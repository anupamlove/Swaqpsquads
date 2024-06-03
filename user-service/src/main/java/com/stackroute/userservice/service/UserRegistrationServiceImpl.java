package com.stackroute.userservice.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.stackroute.userservice.model.UserRating;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;

import lombok.extern.slf4j.Slf4j;
 @Service
@Slf4j
public class UserRegistrationServiceImpl implements UserRegistrationService{
	
	@Autowired
	private UserRepo repo;
	
	
	@Override
	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException {
		Optional<UserRegistration> user = repo.findById(emp.getEmail());
		if (user.isPresent()) {
			throw new UserAlreadyExistException();
		} else {
			emp.setBarterCoins(50);
			return repo.save(emp);
		}
	}

//	@Override
//	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException {
//		Optional<UserRegistration> user = repo.findById(emp.getEmail());
//		if (user.isPresent()) {
//			throw new UserAlreadyExistException();
//		} else {
//			UserRegistration userreg=user.get();
//			userreg.setBarterCoins(50);
//			return repo.save(userreg);
//		}
//	}

	public  UserRegistration getById(String emp) throws UserNotFoundException {
    	Optional<UserRegistration> pro = repo.findById(emp);
		if (pro.isPresent()) {
			return pro.get();
		} else {
			throw new UserNotFoundException ();
		}
    }

	@Override
	public void deleteEmailById(String emp) {
		// TODO Auto-generated method stub
		repo.deleteById(emp);
	}

	@Override
	public UserRegistration update(UserRegistration user) {
		 UserRegistration users =repo.findById(user.getEmail()).get();
		 users.setFirstname(user.getFirstname());
		 users.setLastname(user.getLastname());
		 users.setMobile(user.getMobile());
		 users.setGender(user.getGender());
		 users.setPincode(user.getPincode());
		 users.setCity(user.getCity());
		 users.setState(user.getState());
		 users.setStreet(user.getStreet());
         users.setAge(user.getAge());
         users.setImage(user.getImage());
         repo.save(users);
		return users;
	}


	@Override
	public UserRegistration adduser(String str, MultipartFile file) throws JsonMappingException, JsonProcessingException {
		log.debug("Inside the UserRegistrationServiceImpl -- adduser methods");
		ObjectMapper objectMapper = new ObjectMapper();
		UserRegistration update = objectMapper.readValue(str,UserRegistration.class);
	
	
    	try {
        update.setImage(file.getBytes());
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		repo.save(update);
		return update;
	}




	 @Override
	 public UserRegistration addrating(UserRating add, String email) {
		 Optional<UserRegistration> user= repo.findById(email);
		 UserRegistration abc=user.get();
		 if(abc.getRatings()==null) {
			 List<UserRating> rate=new ArrayList<>();
			 rate.add(add);
			 abc.setRatings(rate);
			 abc.setAvgRating(add.getRating());
			 return repo.save(abc);
		 } else
		 {
			 List<UserRating> rates=abc.getRatings();
			 rates.add(add);
			 double sum=0;
			 for(UserRating userRate:rates){
				 sum= sum+ userRate.getRating();
			 }
			 double avg=sum/rates.size();
			 abc.setAvgRating(avg);
			 abc.setRatings(rates);
			 return repo.save(abc);
		 }
	 }

	 @Override
	 public UserRegistration updateuser(UserRegistration user) throws UserNotFoundException {
		 UserRegistration users =repo.findById(user.getEmail()).get();
		 users.setFirstname(user.getFirstname());
		 users.setLastname(user.getLastname());
		 users.setMobile(user.getMobile());
		 users.setGender(user.getGender());
		 users.setPincode(user.getPincode());
		 users.setCity(user.getCity());
		 users.setState(user.getState());
		 users.setStreet(user.getStreet());
		 users.setAge(user.getAge());
		 return repo.save(users);
	 }

	 @Override
	public UserRegistration add(UserRegistration user) {


//		user.setBarterCoins(50);
	return repo.save(user);



	}


}
