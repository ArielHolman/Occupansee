const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// for bcrypt
const saltRounds = 10;

// FOR ADMIN USE ONLY
const getAllBusinessOwners = (req, res) => {
  let sql = "SELECT * FROM businessowners";
  sql = mysql.format(sql, []);

  pool.query("SELECT * FROM businessowners", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getSignIn = (req, res) => {
  const { email, password } = req.body;

  let sql = "SELECT * FROM businessowners WHERE email = ?";
  sql = mysql.format(sql, [email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send("No matching users");

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send("Invalid password");
      const data = { ...rows[0] };

      data.password = "REDACTED";

      const token = jwt.sign(data, "secret");
      res.status(200).json({
        msg: "Login successful",
        token,
        data: { ...data },
      });
    });
  });
};

const createBusinessOwner = (req, res) => {
  const { firstName, lastName, businessOwnerPhone, email, password } = req.body;
  let sql =
    "INSERT INTO businessowners (firstName, lastName, businessOwnerPhone, email, password) VALUES (?, ?, ?, ?, ?); ";
  let getID = "SELECT MAX(businessOwnerId) FROM businessowners;";
  bcrypt.hash(password, saltRounds, function (err, hash) {
    sql = mysql.format(sql, [
      firstName,
      lastName,
      businessOwnerPhone,
      email,
      hash,
    ]);
    pool.query(getID, (err, rows) => {
      console.log(err);
      console.log("u a row?", rows[0]['MAX(businessOwnerId)']);
    });
    pool.query(sql, (err, rows) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(409).send("UserName is taken");
        return handleSQLError(res, err);
      }
      console.log("RESULT", rows);
      return res.send("Sign-up successful");
    });
  });
};

module.exports = {
  getAllBusinessOwners,
  createBusinessOwner,
  getSignIn,
};
