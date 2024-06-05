\c workhours;

DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial primary key,
  name text not null,
  email text not null
);

CREATE TABLE appointments (
  id serial primary key,
  user_id integer not null,
  date date not null,
  start_time time not null,
  end_time time not null,
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email) VALUES ('Alice Johnson', 'alice.johnson@company.com');
INSERT INTO users (name, email) VALUES ('Bob Smith', 'bob.smith@company.com');
INSERT INTO users (name, email) VALUES ('Charlie Brown', 'charlie.brown@company.com');
INSERT INTO users (name, email) VALUES ('David Jones', 'david.jones@company.com');
INSERT INTO users (name, email) VALUES ('Eve Williams', 'eve.williams@company.com');
INSERT INTO users (name, email) VALUES ('Frank Smith', 'frank.smith@company.com');

INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2024-01-01', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2024-01-01', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2024-01-01', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2024-01-01', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2024-01-01', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2024-01-01', '08:00:00', '17:00:00');

INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2024-01-02', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2024-01-02', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2024-01-02', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2024-01-02', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2024-01-02', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2024-01-02', '08:00:00', '17:00:00');

INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2024-01-03', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2024-01-03', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2024-01-03', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2024-01-03', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2024-01-03', '08:00:00', '17:00:00');
INSERT INTO appointments (user_id, date, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2024-01-03', '08:00:00', '17:00:00');
