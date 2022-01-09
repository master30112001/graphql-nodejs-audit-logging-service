// package imports
const mongoose = require("mongoose");

// creating AuditLog model
const AuditLog = mongoose.model("AuditLog", {
  name: String,
  createdAt: Date,
  severity: String,
  component: String,
  context: String,
  message: String,
});

// exports
module.exports = { AuditLog };
