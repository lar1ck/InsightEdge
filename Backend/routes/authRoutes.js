const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const middlwareVerify = require("../middleware/verifyToken");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify-token", middlwareVerify.verifyToken, (req, res) => {
  res.status(200).json({ message: "Token valid", userId: req.userId });
});

module.exports = router;
