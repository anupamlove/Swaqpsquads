package com.authencationservice.controller;


import java.util.Map;

import com.authencationservice.exception.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.DisabledException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

//import com.authencationservice.config.JwtTokenUtil;
import com.authencationservice.model.JwtRequest;
import com.authencationservice.model.JwtResponse;
import com.authencationservice.model.UserDao;
import com.authencationservice.service.JwtUserDetailsService;
import com.authencationservice.service.SecurityTokenGenerator;

@RestController
//@CrossOrigin("*")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class JwtController {


	@Autowired
	private SecurityTokenGenerator securityTokenGenerator;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/validate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody UserDao userobject) throws Exception {

		Map<String,String> map=null;
		try{
		UserDao user=userDetailsService.loadUserByUsername(userobject.getUsername());
		if (user.getPassword().equals(userobject.getPassword())) {
			map=securityTokenGenerator.generateToken(user);
			return ResponseEntity.ok(map);
			
		}
			return new ResponseEntity<>("Incorrect Password",HttpStatus.NOT_FOUND);
		}
		catch ( UsernameNotFoundException e){
			return new ResponseEntity<>(" Incorrect Password",HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDao user) throws Exception {
		try {
			return ResponseEntity.ok(userDetailsService.save(user));
		}catch (UserAlreadyExistException e){
			return new ResponseEntity<>("User already exist", HttpStatus.BAD_REQUEST);
		}
	}


}
