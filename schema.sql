DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  itemID integer auto_increment not null,
  product_name VARCHAR(100) not null,
  dept_name VARCHAR(100) not null,
  price DECIMAL (10, 4) not null,
  stock_qty integer(11) not null,
  PRIMARY KEY (itemID)
);

SELECT * FROM products;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';