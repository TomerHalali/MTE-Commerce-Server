const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  roleId: String,
  name: String,
});

module.exports = Roles = mongoose.model("Roles", rolesSchema);