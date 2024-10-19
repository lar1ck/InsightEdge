const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const Orders = require("./models/ordersModel");
const Products = require("./models/productModel");
const Users = require("./models/usersModel");

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

//create a new user
app.post('/user', async (req, res) => {
  try{
    const user = await Users.create(req.body);
    res.status(200).json(user); 
  }catch (err) {
    res.status(500).json({message: err.message});
  }
});

//get all users
app.get('/users', async (req, res) => {
  try{
    const allUsers = await Users.find();
    res.status(200).json(allUsers)
  }catch (err) {
    res.status(500).json({message: err.message});
  }
});

//get user by id
app.get('/user/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const result = await Users.findById(id);

    if(!res){
      res.status(404).json({message: 'User not found'});
    }

    res.status(200).json(result)
  }catch(err){
    res.status(500).json({message: err.message});
  }
})

//delete user by id 
app.delete('/user/:id', async (req, res) => {
  try{  
    const {id} = req.params;
    const userDel = await Users.findByIdAndDelete(id);

    if(!userDel){
      return res.status(404).send({message: "User not found"});
    };

    res.status(200).send({message: "User deleted"});
  }catch (err) {
    res.status(500).json({message: err.message});
  }
})


app.put('/user/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const upUser = await Users.findByIdAndUpdate(id,req.body);

    if(!upUser){
      return res.status(404).json({message: 'User not found'});
    }

    const updatedUser = await Users.findById(id)
    res.status(200).json(updatedUser);
  }catch (err) {
    res.status(500).json({message: err.message});
  }
});

//create an oeder
app.post('/order', async (req, res) => {
  try{
    const {product_id,quantity} = req.body;

    const product = await Products.findById(product_id);

    if(!product){
      return res.status(404).json({message: "Product not found"})
    }

    if(product.stock < quantity){
      return res.status(400).json({message:"The quantity is not available"})
    }

    product.stock -= quantity;
    await product.save();

    const order = await Orders.create(req.body);
    res.status(200).json(order);
  }catch(err) {
    res.status(500).json({message: err.message});
  }
});

//get all orders 
app.get('/orders', async (req, res) => {
  try{
    const orders = await Orders.find();
    res.status(200).json(orders);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

//get order by id
app.get('/order/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const order = await Orders.findById(id);

    if(!order){
      return res.status(404).json({message: 'Order not found'});
    }

    res.status(200).json(order);
  }catch(err){
    res.status(500).json({message: err.message});
  }
})

app.get("/start", (req, res) => {
  res.send("welcome to InsightEdge");
});

app.listen(PORT, () => {
  console.log("listening on port: http://localhost:",PORT);
});
