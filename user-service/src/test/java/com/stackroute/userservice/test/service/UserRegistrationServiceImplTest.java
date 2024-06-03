package com.stackroute.userservice.test.service;

import com.stackroute.userservice.service.UserRegistrationServiceImpl;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserRegistrationServiceImplTest {

	@Mock
	UserRepo Repository;

	@InjectMocks
	UserRegistrationServiceImpl Service;

	@Test
	public void givenValidUserIDThenShouldReturnUser() throws UserNotFoundException {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Welcome", "English", 24, "male", 90607, "rt12",
				"rt12");
		Optional<UserRegistration> optionalUser = Optional.of(user);
		when(Repository.findById("hello@gmail.com")).thenReturn(optionalUser);
		UserRegistration retreivedUser = Service.getById("hello@gmail.com");
		assertEquals(user.getEmail(), retreivedUser.getEmail(), "should return user for valid id of exixting user");
	}

	@Test
	public void givenInValidUserIDThenShouldThrowException() throws UserNotFoundException {
		Optional<UserRegistration> optionalUser = Optional.empty();
		when(Repository.findById("hello@gmail.com")).thenReturn(optionalUser);
		assertThrows(UserNotFoundException.class, () -> {
			Service.getById("hello@gmail.com");
		});
	}

	@Test
	public void givenNewUserWhenSavedShouldReturnUser() throws UserAlreadyExistException {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Welcome", "English", 24, "male", 90607, "rt12",
				"rt12");
		Optional<UserRegistration> optionalUser = Optional.empty();
		when(Repository.findById("hello@gmail.com")).thenReturn(optionalUser);
		UserRegistration addedUser = Service.addNew(user);
		verify(Repository, times(1)).findById("hello@gmail.com");
		verify(Repository, times(1)).save(user);
	}

	@Test
	public void givenDuplicateUserWhenSavedShouldThrowException() throws UserAlreadyExistException {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Welcome", "English", 24, "male", 90607, "rt12",
				"rt12");
		Optional<UserRegistration> optionalUser = Optional.of(user);
		when(Repository.findById("hello@gmail.com")).thenReturn(optionalUser);
		assertThrows(UserAlreadyExistException.class, () -> {
			Service.addNew(user);
		});
		verify(Repository, times(1)).findById("hello@gmail.com");
		verify(Repository, times(0)).save(user);
	}

}
