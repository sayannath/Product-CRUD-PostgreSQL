CREATE DATABASE product_database;
--\c into product_database;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(25),
    product_desc VARCHAR(255),
    product_price NUMERIC,
    product_stock NUMERIC
);