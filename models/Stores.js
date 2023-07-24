const mongoose = require("mongoose");

const StoresSchema = new mongoose.Schema({
  storeId: String,
  storeInformation: Array,
  usefulLinks: Array,
  openingHours: Array,
  aboutText: String,
  mediaLinks: Array
});

module.exports = Stores = mongoose.model("Stores", StoresSchema);