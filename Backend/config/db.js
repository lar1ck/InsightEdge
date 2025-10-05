const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const isDocker = process.env.IS_DOCKER === "true";
    const mongoURI = isDocker
      ? process.env.MONGO_URI || "mongodb://mongo:27017/InsightEdge"
      : process.env.MONGO_URI || "mongodb://localhost:27017/InsightEdge";

    await mongoose.connect(mongoURI);
    console.log(`MongoDB connected to: ${mongoURI}`);
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
