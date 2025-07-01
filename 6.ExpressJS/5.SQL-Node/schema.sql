CREATE TABLE user(
    id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE,
    pass VARCHAR(50));
