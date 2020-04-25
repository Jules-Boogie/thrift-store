DROP DATABASE if exists boutique_db;

CREATE DATABASE boutique_db;

USE boutique_db;

CREATE TABLE accessories (
id INT NOT NULL AUTO_INCREMENT,
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100),
primary key(id)
);


CREATE TABLE shoes (
id INT NOT NULL AUTO_INCREMENT,
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100),
primary key(id)
);


CREATE TABLE clothing (
id INT NOT NULL AUTO_INCREMENT,
Type VARCHAR(100),
Designer VARCHAR(100) NOT NULL,
Cost DECIMAL(5,2),
Description TEXT(100),
primary key(id)
);


INSERT INTO shoes (Type, Designer, Cost, Description) VALUES ('Sandals', 'Cole Hann', 60.00, 'Pink Strappy Sandals');

INSERT INTO shoes (Type, Designer, Cost, Description) VALUES ('Booties', ' Stuart Weitzmann', 120.00, 'Black Suede Booties');



INSERT INTO accessories (Type, Designer, Cost, Description) VALUES ('Belt', 'Chanel', 19.99, 'Black Belt with Silver Buckle');
INSERT INTO accessories (Type, Designer, Cost, Description) VALUES ('Necklace', 'Givenchy', 20.00, 'Gold Necklace');




INSERT INTO clothing (Type, Designer, Cost, Description) VALUES ('Tshirt', 'American Apparel', 5.99, "White Stevie Nicks Tshirt");
INSERT INTO clothing (Type, Designer, Cost, Description) VALUES ('Sun Dress', ' Mango', 30.00, 'Multicolor midi sun dress');

