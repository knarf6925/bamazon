DROP DATABASE IF EXISTS bamazon_db;;

CREATE DATABASE bamazon_db;;

USE bamazon_db;;

CREATE TABLE products (
  itemid integer(10) auto_increment not null,
  product_name VARCHAR(100) not null,
  dept_name VARCHAR(100) not null,
  price DECIMAL (10, 4) not null,
  stock_qty integer(11) not null,
  PRIMARY KEY (itemid)
);

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ("PS4", "Video Games", 249.99, 176),
			("NFL Madden 18", "Video Games", 59.99, 50),
            ("Far Cry 5", "Video Games" ,49.99, 25),
            ("Grand Theft Auto V", "Video Games", 39.99, 27),
            ("Call of Duty WWII", "Video Games", 59.99, 10),
            ("Brake pads", "Car parts", 49.99, 21),
            ("Castrol oil", "Car parts", 22.65,112),
            ("Car floor mats", "Car parts", 69.99, 88),
            ("Dining table", "Home goods", 199.99, 40),
            ("Chairs", "Home goods", 25.99, 60);


SELECT * FROM bamazon_db.products;
