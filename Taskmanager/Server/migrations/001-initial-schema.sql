-- Up
CREATE TABLE tasks (id INTEGER PRIMARY KEY, name TEXT, done INTEGER);
CREATE TABLE users (username TEXT PRIMARY KEY, password TEXT);

-- Down
DROP TABLE tasks;
DROP TABLE users;
