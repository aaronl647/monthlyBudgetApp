var mongoose = require("mongoose");

require("dotenv").config();

const url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("MongoDB data connection established successfully!");
});
