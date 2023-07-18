const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categoryId: String,
  name: String,
  description: String,
  parentCategory: String,
  sectionId: String,
  disabled: Boolean
});

module.exports = Categories = mongoose.model("Categories", categoriesSchema);