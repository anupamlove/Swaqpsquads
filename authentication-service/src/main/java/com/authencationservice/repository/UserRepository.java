package com.authencationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.authencationservice.model.UserDao;

public interface UserRepository extends JpaRepository<UserDao, String> {
    UserDao findByUsername(String username);
}

