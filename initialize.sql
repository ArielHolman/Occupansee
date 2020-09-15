DROP TABLE IF EXISTS usersContact, usersPassword, users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE usersContact (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE usersPassword (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  password VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

INSERT INTO users
	(first_name, last_name)
VALUES
  ("James","Butt"),
  ("Josephine","Motley"),
  ("Art","Venere");

INSERT INTO usersContact
	(user_id, phone, email)
VALUES
  (1, "626-572-1096","james.butt@gmail.com"),
  (2, "607-407-3716","josey.motley@aol.net"),
  (3, "510-677-9785","art_venere@yahoo.org");

INSERT INTO usersPassword
	(user_id, password)
VALUES
  (1, "Password123#"),
  (2, "pAsSwOrD456!"),
  (3, "Pa$$W0rD789%");
