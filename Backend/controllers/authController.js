const UsersAuth = require("../models/usersModel");
const bcryptjs = require("bcryptjs");
const jwtToken = require("jsonwebtoken");
const dontenv = require("dotenv");
const jwt = require("jsonwebtoken");

dontenv.config();

exports.register = async (req, res) => {
  try {
    const user = await UsersAuth.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UsersAuth.findOne({ email });
    if (!user) return res.status(404).json({ message: "Invalid email or password" });

    const match = await bcryptjs.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid email or password" });

    const token = jwtToken.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

