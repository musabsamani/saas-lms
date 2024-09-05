const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: Boolean,
});
userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin }, config.get("jwtPrivateKey"));
};
const User = mongoose.model("User", userSchema);

module.exports = { User };
