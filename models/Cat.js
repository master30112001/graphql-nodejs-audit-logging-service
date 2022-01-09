const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", {
  name: String,
  createdAt: Date,
  severity: String,
  component: String,
  context: String,
  message: String,
});

module.exports = { Cat };
