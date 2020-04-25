DROP DATABASE if exists boutique_db;

CREATE DATABASE boutique_db;

USE boutique_db;

CREATE TABLE accessories (
id INT NOT NULL AUTO_INCREMENT,
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100)
);


CREATE TABLE shoes (
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100)
);


CREATE TABLE clothing (
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100)
);


