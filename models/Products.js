const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productId: String,
  name: String,
  description: String,
  price: String,
  promotionPrice: String,
  stock: String,
  images: Array,
  categories: Array,
});

module.exports = Products = mongoose.model("Products", productsSchema);