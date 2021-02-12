const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Expense = new Schema({
  description: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  amountDue: {
    type: Number,
  },
  paymentOption: {
    type: String,
  },
  occurance: {
    type: String,
  },
});

module.exports = mongoose.model("Expense", Expense);
