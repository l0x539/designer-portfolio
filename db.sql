CREATE TABLE users (
    username VARCHAR(100),
    hash VARCHAR(100),
    last_login DATETIME,
    created_at DATETIME,
);

CREATE TABLE videos (
    id int NOT NULL AUTO_INCREMENT,
    url VARCHAR(1000),
    title VARCHAR(100),
    PRIMARY KEY (id)
);