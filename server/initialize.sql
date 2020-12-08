DROP TABLE IF EXISTS businessowners, businesses;

CREATE TABLE businessowners (
  businessOwnerId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(150) NOT NULL,
  lastName VARCHAR(150) NOT NULL,
  businessOwnerPhone VARCHAR(150),
  email VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  PRIMARY KEY (businessOwnerId)
);

CREATE TABLE businesses (
  businessId INT NOT NULL AUTO_INCREMENT,
  businessName VARCHAR(150) NOT NULL,
  streetAddress VARCHAR(150) NOT NULL,
  city VARCHAR(150) NOT NULL,
  state VARCHAR(150) NOT NULL,
  zipcode VARCHAR(150) NOT NULL,
  website VARCHAR(150),
  businessPhone VARCHAR(150),
  maxOccupancy VARCHAR(150) NOT NULL,
  allowedOccupancyRestriction VARCHAR(150) NOT NULL,
  profileImage VARCHAR(250),
  PRIMARY KEY (businessId)
);