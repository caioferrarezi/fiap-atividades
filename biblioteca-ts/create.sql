\c library;

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS publisher;

CREATE TABLE publishers (
  id uuid primary key,
  name text not null,
  document text not null
);

CREATE TABLE books (
  id uuid primary key,
  title text not null,
  author text not null,
  isbn text not null,
  published_at int not null,
  publisher_id uuid not null,
  CONSTRAINT publisher_id FOREIGN KEY (publisher_id) REFERENCES publishers(id)
);

INSERT INTO publishers (id, name, document) VALUES ('1b8c3c3c-9cda-4cb8-9ddf-620e742a03f8', 'Editora A', '123456789');
INSERT INTO publishers (id, name, document) VALUES ('65ca8556-7c61-411d-9dde-bf6788b38b71', 'Editora B', '987654321');
INSERT INTO publishers (id, name, document) VALUES ('72e76151-5b10-49c1-a699-f1e94c046f2c', 'Editora C', '123456789');

INSERT INTO books (id, title, author, isbn, published_at, publisher_id) VALUES ('73344a5a-6e44-4f33-b270-27d26de9deb0', 'Livro A', 'Autor A', '123456789', 2020, (SELECT id FROM publishers WHERE name = 'Editora A'));
INSERT INTO books (id, title, author, isbn, published_at, publisher_id) VALUES ('c204db33-247e-471d-bfc6-1e4df68cb238', 'Livro B', 'Autor B', '987654321', 2021, (SELECT id FROM publishers WHERE name = 'Editora B'));
INSERT INTO books (id, title, author, isbn, published_at, publisher_id) VALUES ('5e373c39-199a-4a2c-b8fb-41ea5dd2384a', 'Livro C', 'Autor C', '123456789', 2022, (SELECT id FROM publishers WHERE name = 'Editora C'));
