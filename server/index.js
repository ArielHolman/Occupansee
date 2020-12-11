const express = require("express");
const bodyParser = require("body-parser");
const businessOwnersRouter = require("./routes/businessOwners");
const businessesRouter = require("./routes/businesses");
require("dotenv").config();
var cors = require("cors");

//use static

const app = express();
const port = process.env.PORT || 4010;
app.use(express.static("build"));

app.use(bodyParser.json());
app.use("/", cors(corsOptions), businessOwnersRouter, businessesRouter);

var corsOptions = {
  origin: "3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", ["*", "3000"]);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
