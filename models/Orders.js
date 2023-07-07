const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  orderId: String,
  userId: String,
  dateAndTime: String,
  orderStatus: String,
  shippingDetails: Object,
  paymentInformation: String,
  products: Array,
});

module.exports = Orders = mongoose.model("Orders", ordersSchema);