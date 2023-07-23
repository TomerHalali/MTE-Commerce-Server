const mongoose = require("mongoose");

const StoresSchema = new mongoose.Schema({
  storeId: String,
  storeInformation: Array,
  usefullLinks: Array,
  openingHours: Array,
  aboutText: String
});

module.exports = Stores = mongoose.model("Stores", StoresSchema);