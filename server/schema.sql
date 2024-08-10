CREATE DATABASE realestate;
USE realestate;

CREATE TABLE buyer(
    buyer_id integer PRIMARY KEY AUTO_INCREMENT,
    buyer_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE seller(
    seller_id integer PRIMARY KEY AUTO_INCREMENT,
    seller_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE house (
    hid integer PRIMARY KEY AUTO_INCREMENT,
    seller_id integer ,
    loc_id integer NOT NULL,
    street VARCHAR(255) NOT NULL,
    price integer NOT NULL,
    bd_rm integer,
    area_sqft integer NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    buyer_id integer DEFAULT NULL,
    status boolean DEFAULT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id),
    FOREIGN KEY (buyer_id) REFERENCES buyer(buyer_id)
);

CREATE TABLE apartment (
    aid integer PRIMARY KEY AUTO_INCREMENT,
   seller_id integer ,
    loc_id integer NOT NULL,
    street VARCHAR(255) NOT NULL,
    price integer NOT NULL,
    flt_no integer NOT NULL,
    area_sqft integer NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    status boolean DEFAULT NULL,
    buyer_id integer DEFAULT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id),
    FOREIGN KEY (buyer_id) REFERENCES buyer(buyer_id)
);

CREATE TABLE land (
    lid integer PRIMARY KEY AUTO_INCREMENT,
    seller_id integer ,
    loc_id integer NOT NULL,
    street VARCHAR(255) NOT NULL,
    price integer NOT NULL,
    area_ac integer NOT NULL,
    cg_rate integer NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    buyer_id integer DEFAULT NULL,
    status boolean DEFAULT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id),
    FOREIGN KEY (buyer_id) REFERENCES buyer(buyer_id)
);

INSERT INTO seller(seller_name, phone, email) VALUES
('John Doe', '123-456-7890', 'john@gmail.com'),
('Jane Doe', '123-456-7890', 'jane@gmail.com'),
('Bob Smith', '123-456-7890', 'bob@gmail.com');

INSERT INTO house(seller_id, loc_id, street, price, bd_rm, area_sqft) VALUES
(1, 1, '123 Main St', 100000, 3, 2000),
(2, 2, '456 Main St', 200000, 4, 3000),
(3, 3, '789 Main St', 300000, 5, 4000);

INSERT INTO apartment(seller_id, loc_id, street, price, flt_no, area_sqft) VALUES
(1, 4, '123 Main St', 100000, 1, 2000),
(2, 5, '456 Main St', 200000, 2, 3000),
(3, 6, '789 Main St', 300000, 3, 4000);

INSERT INTO land(seller_id, loc_id, street, price, area_ac, cg_rate) VALUES
(1, 7, '123 Main St', 100000, 1, 10),
(2, 8, '456 Main St', 200000, 2, 20),
(3, 9, '789 Main St', 300000, 3, 30);


