DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(5,2),
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
);

SELECT * FROM bamazon_db.products;