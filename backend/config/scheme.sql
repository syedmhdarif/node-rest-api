CREATE DATABASE todoitems;
USE todoitems;

CREATE TABLE todoitems (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  status TINYINT(1) DEFAULT 0
);

INSERT INTO todoitems (id, title, description, status)
VALUES 
(1, 'Calling', 'A note about something', false),
(2, 'Create Second Note', 'A note about something else', false);
