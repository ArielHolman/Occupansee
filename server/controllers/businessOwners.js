const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllBusinessOwners = (req, res) => {
  let sql = "SELECT * FROM businessowners";
  sql = mysql.format(sql, []);

  pool.query("SELECT * FROM businessowners", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

// const getBusinessOwnerById = (req, res) => {
//   let sql = 'SELECT * FROM businessowners WHERE id = ?';
//   sql = mysql.format(sql, [req.params.id]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

const createBusinessOwner = (req, res) => {
  const { firstName, lastName, businessOwnerPhone, email, password } = req.body;
  let sql =
    "INSERT INTO businessowners (firstName, lastName, businessOwnerPhone, email, password) VALUES (?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    firstName,
    lastName,
    businessOwnerPhone,
    email,
    password,
  ]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res
      .status(200)
      .json({ message: `Your account has been sucessfully created` });
  });
};

module.exports = {
  getAllBusinessOwners,
  createBusinessOwner,
  // getBusinessOwnerById,
};
