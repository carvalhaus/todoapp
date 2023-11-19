CREATE DATABASE todoapp;

\connect todoapp

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos(id, user_email, title, progress, date)
VALUES('0', 'admin@teste.com', 'First to do', 10, 'Fri Nov 17 2023 21:33:28 GMT-0300 (Brasilia Standard Time)')