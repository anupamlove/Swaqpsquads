package com.stackroute.cgi.Transaction_History.Service;


import java.util.Objects;

import com.stackroute.cgi.Transaction_History.Model.DatabaseSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
public class IdGeneratorService {


	private static MongoOperations mongoOperations;

	@Autowired
	public IdGeneratorService(MongoOperations mongoOperations) {
		this.mongoOperations = mongoOperations;
	}
	
	
	public static long getNextSequence(String  SequenceName) {

		DatabaseSequence counter = mongoOperations.findAndModify(query(where("_id").is(SequenceName)),
				new Update().inc("seq",1), options().returnNew(true).upsert(true),
				DatabaseSequence.class);
		return !Objects.isNull(counter) ? counter.getSeq() : 1;

	}


	
	

	
}
