const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: String,
  timestamps: true,
});

User.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

module.exports = mongoose.model("User", User);
