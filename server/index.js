const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const businessesRouter = require("./routes/businesses");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4003;

app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/businesses", businessesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Occupansee server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
