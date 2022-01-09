const mongoose = require("mongoose");

const AuditLog = mongoose.model("AuditLog", {
  name: String,
  createdAt: Date,
  severity: String,
  component: String,
  context: String,
  message: String,
});

module.exports = { AuditLog };
