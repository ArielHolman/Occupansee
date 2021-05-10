const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// FOR ADMIN USE ONLY
const getAllBusinesses = (req, res) => {
  let sql = "SELECT * FROM businesses";
  sql = mysql.format(sql, []);

  pool.query("SELECT * FROM businesses", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//create a new business
const createBusiness = (req, res) => {
  const {
    ownerId,
    businessName,
    streetAddress,
    city,
    state,
    zipcode,
    website,
    businessPhone,
    maxOccupancy,
    allowedOccupancyRestriction,
  } = req.body;
  let sql =
    "INSERT INTO businesses (ownerId, businessName, streetAddress, city, state, zipcode, website, businessPhone, maxOccupancy, allowedOccupancyRestriction) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    ownerId,
    businessName,
    streetAddress,
    city,
    state,
    zipcode,
    website,
    businessPhone,
    maxOccupancy,
    allowedOccupancyRestriction,
  ]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res
      .status(200)
      .json({ message: `Your business account has been sucessfully created` });
  });
};

//select one business by id
const getBusinessById = (req, res) => {
  let sql = "SELECT * FROM businesses WHERE businessId = ?";
  sql = mysql.format(sql, [req.params.businessId]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//update biz info
const updateBusinessById = (req, res) => {
  const {
    businessName,
    streetAddress,
    city,
    state,
    zipcode,
    website,
    businessPhone,
    maxOccupancy,
    allowedOccupancyRestriction,
  } = req.body;
  let sql =
    "UPDATE businesses SET businessName = ?, streetAddress = ?, city = ?, state = ?, zipcode = ?, website = ?,businessPhone = ?, maxOccupancy = ?, allowedOccupancyRestriction = ? WHERE businessId = ?";
  sql = mysql.format(sql, [
    businessName,
    streetAddress,
    city,
    state,
    zipcode,
    website,
    businessPhone,
    maxOccupancy,
    allowedOccupancyRestriction,
    req.params.businessId,
  ]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.status(200).json(rows);
  });
};

module.exports = {
  getAllBusinesses,
  createBusiness,
  getBusinessById,
  updateBusinessById,
};
