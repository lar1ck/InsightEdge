const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  product_id: {
    type: "String",
    required: true,
  },
  quantity: {
    type: "Number",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
  createdAt: {
    type: "Date",
    default: Date.now(),
  },
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
