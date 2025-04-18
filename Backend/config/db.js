const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/InsightEdge");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = connectDB;
