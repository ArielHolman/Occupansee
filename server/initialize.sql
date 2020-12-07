DROP TABLE IF EXISTS businessowners;

CREATE TABLE businessowners (
  businessOwnerId INT NOT NULL,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  businessOwnerPhone VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(150)
  );