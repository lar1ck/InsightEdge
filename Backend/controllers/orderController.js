const Orders = require("../models/ordersModel");
const Products = require("../models/productModel");

exports.createOrder = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const product = await Products.findById(product_id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (product.stock < quantity) return res.status(400).json({ message: "Quantity not available" });

    product.stock -= quantity;
    await product.save();

    const order = await Orders.create(req.body);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findById(id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findById(id);
    if (!order) return res.status(404).json({ message: "No order found" });

    const product = await Products.findById(order.product_id);
    if (product) {
      product.stock += order.quantity;
      await product.save();
    }

    await Orders.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.totalSales = async (req, res) => {
  try {
    const result = await Orders.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$price" },
        },
      },
    ]);
    const total = result.length > 0 ? result[0].totalAmount : 0;
    res.status(200).json(total);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.totalOrders = async (req, res) => {
  try {
    const count = await Orders.countDocuments();
    res.status(200).json(count);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
