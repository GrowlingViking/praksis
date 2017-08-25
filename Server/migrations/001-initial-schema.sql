-- Up
CREATE TABLE tasks (id INTEGER, name TEXT, done INTEGER);
CREATE TABLE users (id INTEGER, username TEXT, password TEXT);

-- Down
DROP TABLE tasks;
DROP TABLE users;
