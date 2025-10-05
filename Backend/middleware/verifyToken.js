const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();


exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token available" });
  }

  jwt.verify(token,process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userId = decoded.userId;
    next();
  });
};
