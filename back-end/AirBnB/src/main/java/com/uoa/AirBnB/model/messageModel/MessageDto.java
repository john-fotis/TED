package com.uoa.AirBnB.model.messageModel;

import lombok.Data;

import java.util.Date;

@Data
public class MessageDto {

    private long id;
    private String text;
    private Date sendDate;
    private boolean seen;

    private long listingId;
    private long guestId;
}
