CREATE DATABASE appbdd;

\l

\c appbdd;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('pretoriano', 'pretoriano@ibm.com'),
    ('pepe', 'pepes@faztweb.com');

select * from users;