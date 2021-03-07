var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

require("./config/database");

var budgetRouter = require("./routes/api/budget");
var incomeRouter = require("./routes/api/budget");

var app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/budget", budgetRouter);
app.use("/income", incomeRouter);

var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
