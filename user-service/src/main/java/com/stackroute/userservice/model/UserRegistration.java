package com.stackroute.userservice.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter

	@Document(collection="users")
	public class UserRegistration {
		@Id
		private String   email;
		private String  firstname;
		private String  lastname;
		private int age;
		private String   gender;
		private long  mobile;
		private String  password;
		private String  cpassword;
		private List<UserRating> ratings;
		private double avgRating;
		private byte[] image;

		private String street;
		private String city;
		private String state;
		private String pincode;

	
		private int barterCoins;

		
		public UserRegistration(String email, String firstname, String lastname, int age, String gender, int mobile,
				String password, String cpassword) {
			super();
			this.email = email;
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;
			this.gender = gender;
			this.mobile = mobile;
			this.password = password;
			this.cpassword = cpassword;
		}

		public UserRegistration(String email, String firstname, String lastname, int age, String gender, int mobile,
				String password, String cpassword, String street, String city, String state, String pincode) {
			super();
			this.email = email;
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;
			this.gender = gender;
			this.mobile = mobile;
			this.password = password;
			this.cpassword = cpassword;
			this.street = street;
			this.city = city;
			this.state = state;
			this.pincode = pincode;
		}
		
		
}