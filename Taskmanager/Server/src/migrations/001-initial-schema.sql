-- Up
CREATE TABLE tasks (id INTEGER PRIMARY KEY, name TEXT, done INTEGER);
INSERT INTO tasks (id, name, done) VALUES (0, 'Task1', 0);
INSERT INTO tasks (id, name, done) VALUES (1, 'Task2', 0);
INSERT INTO tasks (id, name, done) VALUES (2, 'Task3', 0);

-- Down
DROP TABLE tasks;
