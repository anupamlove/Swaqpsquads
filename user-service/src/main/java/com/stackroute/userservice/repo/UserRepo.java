package com.stackroute.userservice.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.stackroute.userservice.model.UserRating;
import com.stackroute.userservice.model.UserRegistration;
@Repository
@Transactional
public interface UserRepo extends MongoRepository<UserRegistration, String> {


}
