CREATE DATABASE dinner_spinner;

USE dinner_spinner;


CREATE TABLE previous_restaurant (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
	date_visited DATETIME NOT NULL,
	experience_rating INT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE user (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(10) NOT NULL,
	PRIMARY KEY(id)
);

