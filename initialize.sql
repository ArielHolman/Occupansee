DROP TABLE IF EXISTS usersContact, usersPassword, users, businesses, businessUsers, businessUserContact, businessUserRole, businessContact, businessAddress, businessCapacity;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (user_id));

CREATE TABLE usersContact (
  contact_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (contact_id),
  FOREIGN KEY (user_id)
  REFERENCES users (user_id)
    ON DELETE CASCADE);

CREATE TABLE usersPassword (
  password_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  password VARCHAR(50),
  PRIMARY KEY (password_id),
  FOREIGN KEY (user_id)
  REFERENCES users (user_id)
    ON DELETE CASCADE);
-- 2nd foreign key - user email

CREATE TABLE businesses (
  business_id INT NOT NULL AUTO_INCREMENT,
  business_name VARCHAR(200),
  PRIMARY KEY (business_id));

CREATE TABLE businessUsers (
  business_user_id INT NOT NULL AUTO_INCREMENT,
  business_id INT NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (business_user_id),
  FOREIGN KEY (business_id)
  REFERENCES businesses (business_id)
    ON DELETE CASCADE);

CREATE TABLE businessUserContact (
  business_user_contact_id INT NOT NULL AUTO_INCREMENT,
  business_user_id INT NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (business_user_contact_id),
  FOREIGN KEY (business_user_id)
  REFERENCES businessUsers (business_user_id)
    ON DELETE CASCADE);


CREATE TABLE businessUserRole (
  business_user_role_id INT NOT NULL AUTO_INCREMENT,
  business_user_id INT NOT NULL,
  user_role VARCHAR(50),
  PRIMARY KEY (business_user_role_id),
  FOREIGN KEY (business_user_id)
  REFERENCES businessUsers (business_user_id)
    ON DELETE CASCADE);
-- other foreign keys: business_id, business_name, business_city, business_state, business_user_first_name, business_user_last_name


CREATE TABLE businessContact (
  business_contact_id INT NOT NULL AUTO_INCREMENT,
  business_id INT NOT NULL,
  business_phone_number VARCHAR(50),
  business_menu VARCHAR(50),
  business_website VARCHAR(50),
  PRIMARY KEY (business_contact_id),
  FOREIGN KEY (business_id)
  REFERENCES businesses (business_id)
    ON DELETE CASCADE);
-- other foreign keys: business_name


CREATE TABLE businessAddress (
  business_address_id INT NOT NULL AUTO_INCREMENT,
  business_id INT NOT NULL,
  business_street_address VARCHAR(50),
  business_city VARCHAR(50),
  business_state VARCHAR(50),
  business_zip_code VARCHAR(50),
  PRIMARY KEY (business_address_id),
  FOREIGN KEY (business_id)
  REFERENCES businesses (business_id)
    ON DELETE CASCADE);
-- other foreign keys: business_name


CREATE TABLE businessCapacity (
  capacity_instance_id INT NOT NULL AUTO_INCREMENT,
  business_id INT NOT NULL,
  capacity_max VARCHAR(50),
  capacity_requirements VARCHAR(50),
  current_capactity VARCHAR(50),
  PRIMARY KEY (capacity_instance_id),
  FOREIGN KEY (business_id)
  REFERENCES businesses (business_id)
    ON DELETE CASCADE);
-- other foreign keys: business_name

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

INSERT INTO businesses
	(business_id, business_name)
VALUES
  (1, "Forever 30"),
  (2, "Buns and Guns Bootcamp"),
  (3, "ACA's BBQ");

INSERT INTO businessUsers
	(business_id, first_name, last_name)
VALUES
  (1, "Ally","Jones"),
  (2, "Destiny","Charmer"),
  (3, "Bosley","Moe");

INSERT INTO businessUserContact
	(business_user_id, phone, email)
VALUES
  (1, "234-567-8900","ally.jones@forever30.com"),
  (2, "112-343-4567","destiny@bandgbootcamp.net"),
  (3, "765-434-0987","moe.bosley@bbqislife.org");

INSERT INTO businessUserRole
	(business_user_id, user_role)
VALUES
  (1, "Employee"),
  (2, "Owner"),
  (3, "Manager");

INSERT INTO businessContact
	(business_id, business_phone_number, business_menu, business_website)
VALUES
  (1, "234-544-8455", "n/a", "www.forever30.com"),
  (2, "144-367-4906","services.jpg", "bunsandguns.com"),
  (3, "778-464-0268", "menu.pdf", "www.ACA-BBQ.net");

INSERT INTO businessAddress
	(business_id, business_street_address, business_city, business_state, business_zip_code)
VALUES
  (1, "2365 Fountain of Youth Avenue","Austin", "TX", 78939),
  (2, "90210 Hey Girl Hey Blvd.", "Austin", "TX", 78939),
  (3, "7373 BarBQue Is Life St.", "Miami", "FL", 50483);

INSERT INTO businessCapacity
	(business_id, capacity_max, capacity_requirements, current_capactity)
VALUES
  (1, 100, "100%", 70),
  (2, 100, "50%", 60),
  (3, 100, "50%", 45);