-- Up
CREATE TABLE tasks (id INTEGER, name TEXT, done INTEGER);
CREATE TABLE users (id INTEGER, username TEXT, password TEXT);
INSERT INTO tasks (id, name, done) VALUES (0, 'Task1', 0);
INSERT INTO tasks (id, name, done) VALUES (1, 'Task2', 0);
INSERT INTO tasks (id, name, done) VALUES (2, 'Task3', 0);
INSERT INTO users (id, username, password) VALUES (0, 'USER', '12345');


-- Down
DROP TABLE tasks;
DROP TABLE users;
