DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  itemid integer auto_increment not null,
  product_name VARCHAR 100 not null,
  dept_name VARCHAR 100 not null,
  price DECIMAL 10, 4 not null,
  stock_qty integer 11 not null,
  PRIMARY KEY itemid
);

SELECT * FROM products;

