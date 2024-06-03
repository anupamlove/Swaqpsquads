package com.stackroute.userservice.test.repo;

import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserRepoTest {

	@Autowired
	UserRepo Repository;

	@Test
	public void givenNewUserWhenSavedThenReturnUser() {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Welcome", "English", 24, "male", 90607, "rt12",
				"rt12");
		UserRegistration adddeduser = Repository.save(user);
		assertEquals(user.getEmail(), adddeduser.getEmail(),
				"New User should be saved and the same should be returned");
	}

	@Test
	public void givenInValidUserIdThenReturnEmptyOptional() {
		assertTrue(Repository.findById("hello@gmail.com").isEmpty());
	}

	@Test
	public void givenValidUserIdThenReturnUserOptional() {
		UserRegistration user = new UserRegistration("hello@gmail.com", "Welcome", "English", 24, "male", 90607, "rt12",
				"rt12");
		Repository.save(user);
		assertTrue(Repository.findById("hello@gmail.com").isPresent());
	}

}
