const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

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
});

User.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

User.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", User);
