const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/verifyToken");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/total-sales", orderController.totalSales);
router.get("/total-orders", orderController.totalOrders);
router.get("/:id", orderController.getOrderById);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;