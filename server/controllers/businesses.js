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

const createBusiness = (req, res) => {
  const { businessName, streetAddress, city, state, zipcode, maxOccupancy, allowedOccupancyRestriction } = req.body;
  let sql =
    "INSERT INTO businesses (businessName, streetAddress, city, state, zipcode, maxOccupancy, allowedOccupancyRestriction) VALUES (?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    businessName,
    streetAddress,
    city,
    state,
    zipcode,
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

module.exports = {
  getAllBusinesses,
  createBusiness,
};
