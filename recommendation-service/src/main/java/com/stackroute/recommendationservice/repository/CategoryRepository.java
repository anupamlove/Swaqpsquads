package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.model.Category;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends Neo4jRepository<Category,String> {

}
