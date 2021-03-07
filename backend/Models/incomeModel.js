const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Income = new Schema({
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Income", Income);
