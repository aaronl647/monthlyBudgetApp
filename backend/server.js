var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

require("./config/database");

var app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
