var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/budget-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("MongoDB data connection established successfully!");
});
