const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Budget = new Schema({
  month: {
    type: String,
  },
  year: {
    type: Number,
  },
  expense: { type: mongoose.Schema.Types.ObjectId, ref: "Expense" },
  income: { type: mongoose.Schema.Types.ObjectId, ref: "Income" },
});

module.exports = mongoose.model("Budget", Budget);
