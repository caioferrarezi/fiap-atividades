\c workhours;

DROP TABLE IF EXISTS work_hours;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial primary key,
  name text not null,
  email text not null
);

CREATE TABLE work_hours (
  id serial primary key,
  user_id integer not null,
  work_day date not null,
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

INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2022-01-01', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2022-01-01', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2022-01-01', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2022-01-01', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2022-01-01', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2022-01-01', '08:00:00', '17:00:00');

INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2022-01-02', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2022-01-02', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2022-01-02', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2022-01-02', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2022-01-02', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2022-01-02', '08:00:00', '17:00:00');

INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Alice Johnson'), '2022-01-03', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Bob Smith'), '2022-01-03', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Charlie Brown'), '2022-01-03', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'David Jones'), '2022-01-03', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Eve Williams'), '2022-01-03', '08:00:00', '17:00:00');
INSERT INTO work_hours (user_id, work_day, start_time, end_time) VALUES ((SELECT id FROM users WHERE name = 'Frank Smith'), '2022-01-03', '08:00:00', '17:00:00');
