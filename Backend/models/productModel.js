const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: false,
    },
    price: {
      type: "Number",
      required: true,
    },
    currency: {
      type: "String",
      required: true,
    },
    stock: {
      type: "Number",
      required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    brand: {
      type: "String",
      required: false,
    },
    image: {
      type: "String",
      required: false,
    },
    updatedAt: {
      type: "Date",
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
