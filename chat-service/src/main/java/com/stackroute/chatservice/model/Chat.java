package com.stackroute.chatservice.model;

import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "chats")
public class Chat {
    @Transient
    public static final String SEQUENCE_NAME = "chat_sequence";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int chatId;
    private String ownerEmail;
    private String buyerEmail;
    private List<Message> messageList;

}
