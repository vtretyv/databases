DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users(
  userID int, 
  userName text, 
  PRIMARY KEY(userID)

);
CREATE TABLE rooms(
  roomID int, 
  roomName text, 
  PRIMARY KEY(roomID)

);


CREATE TABLE messages (
  /* Describe your table here.*/
  messageID int,
  userID int,
  message text,
  roomID int,
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID) REFERENCES users(userID),
  FOREIGN KEY (roomID) REFERENCES rooms(roomID)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

