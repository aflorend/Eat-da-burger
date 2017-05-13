-- Schema for bugers database

CREATE DATABASE bobs_burgers;
USE bobs_burgers;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burger VARCHAR(255) NOT NULL,
  eaten BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
