package com.authencationservice.service;

import com.authencationservice.controller.UserAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.authencationservice.exception.UsernameNotFoundException;
import com.authencationservice.model.UserDao;
import com.authencationservice.repository.UserRepository;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService{
	@Autowired
	private UserRepository userDao;

//	@Autowired
//	private PasswordEncoder bcryptEncoder;
//
	public UserDao loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDao user = userDao.findById(username).get();
		if (user == null) {
			throw new UsernameNotFoundException(" UsernameNotFoundException: " + username);
		}
		return user;
				
	}

	public UserDao save(UserDao user) throws UserAlreadyExistException {
		UserDao newUser = new UserDao();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(user.getPassword());
		return userDao.save(newUser);
	}
}


