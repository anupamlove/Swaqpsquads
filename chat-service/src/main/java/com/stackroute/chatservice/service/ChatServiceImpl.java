package com.stackroute.chatservice.service;

import com.stackroute.chatservice.exception.ChatAlreadyExistException;
import com.stackroute.chatservice.exception.ChatNotFoundException;
import com.stackroute.chatservice.exception.NoChatExistsInTheRepository;
import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.Message;
import com.stackroute.chatservice.repository.ChatRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ChatServiceImpl implements ChatService {


    private ChatRepository chatRepository;
    private SequenceGeneratorService sequenceGeneratorService;


    @Autowired
    public ChatServiceImpl(ChatRepository chatRepository, SequenceGeneratorService sequenceGeneratorService) {
        log.debug("Inside the ChatServiceImpl -- Constructor");
        this.chatRepository = chatRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }

//    public Chat addChat(Chat chat) throws ChatAlreadyExistException {
//        Optional<Chat> ct = chatRepository.findById(chat.getChatId());
//
//        if (ct.isPresent()) {
//            log.error("Chat exists in the repository");
//            throw new ChatAlreadyExistException();
//        } else {
//            log.debug("Inside the ChatServiceImpl -- addChat methods");
//            chat.setChatId(sequenceGeneratorService.generateSequence(Chat.SEQUENCE_NAME));
//            return chatRepository.save(chat);
//        }
//
//    }

    public Chat addChat(Chat chat) {
        chat.setChatId(sequenceGeneratorService.generateSequence(Chat.SEQUENCE_NAME));
        log.debug("Inside the ChatServiceImpl -- addChat methods");
        return chatRepository.save(chat);
    }


//    @Override
//    public List<Chat> findallchats() throws NoChatExistsInTheRepository {
//        if (chatRepository.findAll().isEmpty()) {
//            log.error("No chat exists in the repository");
//            throw new NoChatExistsInTheRepository();
//        } else {
//            log.debug("Inside the ChatServiceImpl -- findallrepository methods");
//            return chatRepository.findAll();
//        }
//
//    }

    @Override
    public List<Chat> findallchats() throws NoChatExistsInTheRepository {
        if (chatRepository.findAll().isEmpty()) {
            log.error("No chat exists in the repository");
            throw new NoChatExistsInTheRepository();
        } else {
            log.debug("Inside the ChatServiceImpl -- findallrepository methods");
            return chatRepository.findAll();
        }

    }

    @Override
    public Chat getById(int chatId) throws ChatNotFoundException {
        Optional<Chat> chatid = chatRepository.findById(chatId);
        if (chatid.isPresent()) {
            log.debug("Inside the ChatServiceImpl -- getById methods");
            return chatid.get();
        } else {
            log.error("Chat not exists in the repository");
            throw new ChatNotFoundException();
        }
    }

    @Override
    public HashSet<Chat> getChatByBuyerEmail(String email) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatByBuyerEmail(email);

        if (chat.isEmpty()) {
            log.debug("Chat not exists in the repository");
            throw new ChatNotFoundException();
        } else {
            log.debug("Inside the ChatServiceImpl -- getByBuyerEmail methods");
            return chat;
        }
    }

    @Override
    public HashSet<Chat> getChatByOwnerEmail(String email) throws ChatNotFoundException {
        HashSet<Chat> chat = chatRepository.getChatByOwnerEmail(email);
        if (chat.isEmpty()) {
            log.debug("Chat not exists in the repository");
            throw new ChatNotFoundException();
        } else {
            log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
            return chat;
        }
    }


    @Override
    public HashSet<Chat> getChatByOrOwnerEmailBuyerEmail(String email) throws ChatNotFoundException{
//        HashSet<Chat> chat = chatRepository.getChatByOrOwnerEmailOrBuyerEmail(email);

        HashSet<Chat> chat = chatRepository.getChatByOwnerEmail(email);
        HashSet<Chat> chat1 = chatRepository.getChatByBuyerEmail(email);
        chat1.addAll(chat);
        if (chat.isEmpty() && chat1.isEmpty()) {
            log.debug("Chat not exists in the repository");
            throw new ChatNotFoundException();
        } else if (chat1.isEmpty()) {
            log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
            return chat;
        } else {
            log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
            return chat1;
        }
    }


    @Override
    public HashSet<Chat> getChatByOwnerEmailAndBuyerEmail(String ownerEmail, String buyerEmail) throws ChatNotFoundException {

        HashSet<Chat> chat = chatRepository.getChatByOwnerEmailAndBuyerEmail(ownerEmail, buyerEmail);
        HashSet<Chat> chat1 = chatRepository.getChatByBuyerEmailAndOwnerEmail(ownerEmail, buyerEmail);
        if (chat.isEmpty() && chat1.isEmpty()) {
            log.debug("Chat not exists in the repository");
            throw new ChatNotFoundException();
        } else if (chat.isEmpty()) {
            log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
            return chat1;
        } else {
            log.debug("Inside the ChatServiceImpl -- getOwnerEmail methods");
            return chat;
        }
    }

//    @Override
//    public Chat getChatByOwnerEmailAndBuyerEmail(String ownerEmail, String buyerEmail) throws ChatNotFoundException  {
//        Optional<Chat> chatid = chatRepository.findById( ownerEmail, buyerEmail);
//        if (chatid.isPresent()) {
//            log.debug("Inside the ChatServiceImpl -- getById methods");
//            return chatid.get();
//        } else {
//            log.error("Chat not exists in the repository");
//            throw new ChatNotFoundException();
//        }
//    }


    @Override
    public Chat addMessage(Message add, int chatId) {
        Optional<Chat> chat=chatRepository.findById(chatId);
        Chat abc=chat.get();
        if(abc.getMessageList()==null){
            List<Message> msg=new ArrayList<>();
            msg.add(add);
            abc.setMessageList(msg);
            return chatRepository.save(abc);
        }else{
            List<Message> rates=abc.getMessageList();
            rates.add(add);
            abc.setMessageList(rates);
            return chatRepository.save(abc);
        }
    }




}
