const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
// const Students = require('./models/studentsModel');
// const Teachers = require('./models/teachersModel');
// const Users = require('./models/usersModel');
const Products = require("./models/productModel");

app.use(cors());
app.use(express.json());

const mogooseURI = "mongodb://localhost:27017/InsightEdge";
const connectdb = async () => {
  try {
    await mongoose.connect(mogooseURI);
    console.log("connected to mongodb");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
connectdb();

//create a product
app.post("/product", async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//get a product by id
app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//update a product by id
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Products.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//update a product by it's name 
// app.put('/product/:name', async (req, res) => {
//     try{
//         const { name } = req.params;
//         const product = await Products.findOneAndUpdate({ name: name }, req.body , {new : true, runValidators: true});

//         if(!product){
//            return res.status(404).json({message: 'Product not found'});
//         }

//         res.status(200).json(product);
//     }catch(err){
//         res.status(400).json({ message: err.message });
//     }
// });

//delete a product by its ID
app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productDel = await Products.findByIdAndDelete(id);

    if (!productDel) {
     return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({message: "Product deleted"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/start", (req, res) => {
  res.send("welcome to InsightEdge");
});

app.listen(PORT, () => {
  console.log("listening on port: http://localhost:", PORT);
});
