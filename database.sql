CREATE TABLE user_data(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
    username VARCHAR(255)
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY
);

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    id_category SERIAL,
    FOREIGN KEY (id_category) REFERENCES category (id)
);

CREATE TABLE meal_type(
    id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE meal(
    id SERIAL PRIMARY KEY,
    date_value DATE,
    meal_type VARCHAR(255),
    products_id SERIAL[],
    FOREIGN KEY (products_id) REFERENCES product (id),
    FOREIGN KEY (meal_type) REFERENCES meal_type (id)
);