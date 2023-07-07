const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
  cartId: String,
  userId: String,
  products: Array,
});

module.exports = Carts = mongoose.model("Carts", cartsSchema);