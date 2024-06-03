package com.stackroute.cgi.Transaction_History.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import com.stackroute.cgi.Transaction_History.Exception.TransactionIdNotFound;
import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class TransactionServiceImplementation implements TransactionService {
	@Autowired
	private TransactionRepository repository;
	@Autowired
	private IdGeneratorService idGeneratorService;

//SaveAutogenerateTransactionId
	@Autowired
	public TransactionServiceImplementation(TransactionRepository repository, IdGeneratorService idGeneratorService) {
		log.debug("Inside the ProductServiceImpl -- Constructor");
		this.repository = repository;
		this.idGeneratorService = idGeneratorService;
	}

	//ByTransactionId
	public Transaction getByTransactionId(int transactionId) throws TransactionIdNotFound {
		Optional<?> pro = repository.findById(transactionId);
		if (pro.isPresent()) {
			log.debug("Inside the TransactionServiceImpl -- getById methods");
			return (Transaction) pro.get();
		} else {
			log.error("Transaction not exists in the repository");
			throw new TransactionIdNotFound();
		}
	}
// BySellerEmail

	//	public  Transaction getBySellerEmail(String sellerEmail) throws TransactionNotFound {
//		Optional<Transaction> bE = repository.findByBuyerEmail(sellerEmail);
//		if (bE.isPresent()) {
//			return bE.get();
//		} else {
//			throw new TransactionNotFound();
//		}
//	}
//	public Optional<Transaction> getBySellerEmail(String sellerEmail) throws TransactionNotFound {
//		if (repository.findBySellerEmail(sellerEmail).isEmpty()) {
//			log.error("Transaction not exists in the repository");
//			throw new TransactionNotFound();
//		} else {
//			log.debug("Inside the TransactionServiceImpl -- getBySellerEmail methods");
//			return repository.findBySellerEmail(sellerEmail);
//		}
//	}


//	public  Transaction getByBuyerEmail(String buyerEmail) throws TransactionNotFound {
//    	Optional<Transaction> bE = repository.findByBuyerEmail(buyerEmail);
//		if (bE.isPresent()) {
//			return bE.get();
//		} else {
//			throw new TransactionNotFound();
//		}
//    }
//
//	}

//ByBuyerEmail
@Override
public List<Transaction> getByBuyeremail(String buyeremail) throws TransactionNotFound {
	List<Transaction> chat = repository.findByBuyerEmail(buyeremail);
	if (chat.isEmpty()) {
		log.debug("Chat not exists in the repository");
		throw new TransactionNotFound();
	} else {
		log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
		return chat;

	}
}

	//@Override
//	public HashSet<Transaction> getBySellerEmail(String sellerEmail) throws TransactionNotFound{
//
//			HashSet<Transaction> chat = repository.getBysellerEmail(sellerEmail);
//			if (chat.isEmpty()) {
//				log.debug("Chat not exists in the repository");
//				throw new TransactionNotFound();
//			} else {
//				log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
//				return chat;
//			}
//		}


	@Override
	public List<Transaction> getBySellermail(String selleremail) throws TransactionNotFound {
		List<Transaction> chat = repository.findBySellerEmail(selleremail);
	if (chat.isEmpty()) {
				log.debug("Chat not exists in the repository");
				throw new TransactionNotFound();
			} else {
				log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
				return chat;

	}
}
}
