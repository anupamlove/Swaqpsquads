package com.stackroute.cgi.Transaction_History.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;
@Document(collection ="DatabaseSequence")
@Component
@Data
@AllArgsConstructor
@NoArgsConstructor

public class DatabaseSequence {
	@Id
	private String transactionId;
	private int seq;
}
