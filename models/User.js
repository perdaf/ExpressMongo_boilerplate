const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
