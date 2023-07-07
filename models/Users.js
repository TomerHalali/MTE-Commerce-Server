const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  shippingAddress: String,
  billingInformation: String,
  phoneNumber: String,
  dateOfBirth: String,
  isApproval: Boolean,
  createdOn: String,
  rankId: String,
  roleId: String
});

module.exports = Users = mongoose.model("Users", userSchema);


