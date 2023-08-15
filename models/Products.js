const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  promotionPrice: String,
  images: Array,
  categories: Array,
  variants: Array,
  price: String,

});

module.exports = Products = mongoose.model("Products", productsSchema);