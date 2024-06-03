package com.stackroute.userservice.test.controller;

import com.stackroute.userservice.service.UserRegistrationServiceImpl;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;
import com.stackroute.userservice.service.UserRegistrationService;
import com.stackroute.userservice.controller.UserRegistrationController;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class UserRegistrationControllerTest {

	@Mock
	private UserRegistrationService Service;

	@InjectMocks
	private UserRegistrationController Controller;

	@Autowired
	private MockMvc mockMvc;

	@BeforeEach
	public void setUp() {
		mockMvc = MockMvcBuilders.standaloneSetup(Controller).build();
	}

	@Test
	public void givenNewUserWhenPostThenReturnUserJSON() throws Exception {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Raju", "Kumar", 24, "male", 90607, "123",
				"123");
		when(Service.addNew(any())).thenReturn(user);
		mockMvc.perform(post("/users/user").contentType(MediaType.APPLICATION_JSON).content(
				"{\"email\":\"hello@gmail.com\",\"firstname\":\"Raju\",\"lastname\":\"Kumar\",\"age\":24,\"gender\":\"male\",\"mobile\":90607,\"password\":\"123\"}"))
				.andExpect(status().isCreated()).andExpect(jsonPath("$.email").value("hello@gmail.com"));
	}

	@Test
	public void givenDuplicateUserWhenPostThenReturnErrorMessage() throws Exception {
		when(Service.addNew(any())).thenThrow(UserAlreadyExistException.class);
		mockMvc.perform(post("/users/user").contentType(MediaType.APPLICATION_JSON).content(
				"{\"email\":\"hello@gmail.com\",\"firstname\":\"Raju\",\"lastname\":\"Kumar\",\"age\":24,\"gender\":\"male\",\"mobile\":90607,\"password\":\"123\"}"))
				.andExpect(status().isConflict()).andExpect(content().string("User already Exist"));
	}

}
