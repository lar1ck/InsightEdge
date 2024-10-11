const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const Students = require('./models/studentsModel');
const Teachers = require('./models/teachersModel');
const Users = require('./models/usersModel');

app.use(cors());
app.use(express.json());


const mogooseURI = "mongodb://localhost:27017/school";
const connectdb = async () => {
    try{
        await mongoose.connect(mogooseURI);
        console.log("connected to mongodb");
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
connectdb();

//create a student
app.post('/student', async (req,res) => {
    try{
        const student = await Students.create(req.body);
        res.status(200).json(student);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//get all students
app.get('/students', async (req, res) => {
    try{
        const students = await Students.find();
        res.status(200).json(students);
    }catch(err){
        res.status(400).json({message: err.message});
    };
});

//get a student by id
app.get('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const student = await Students.findById(id);
        res.status(200).json(student);
    }catch(err){
        res.status(400).json({message: err.message});
    };
});

//update a student with id
app.put('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const upStudent = await Students.findByIdAndUpdate(id,req.body);

        if(!upStudent){
            res.status(404).json({message:"Student not found"});
        };

        const studentUp = await Students.findById(id);
        res.status(200).json(studentUp);
    }catch(err){
        res.status(400).json({message: err.message});
    };
});

//get a student by id and delete the student
app.delete('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const student = await Students.findByIdAndDelete(id);

        if(!student){
            res.status(404).json({message: 'Student not found'});
        }

        res.status(200).json({message: "student deleted"});
    }catch(err){
        res.status(400).json({message: err.message});
    };
});

//get all users
app.get("/users", async (req, res) => {
    try{
        const users = await Users.find();
        
        if(!users){
            res.status(404).json({message:"No users found"});
        }

        res.status(200).json(users);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//create a new user
app.post('/user', async (req, res) => {
    try{
        const newUser = await Users.create(req.body);
        res.status(200).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//get all teachers
app.get('/teachers', async (req, res) => {
    try{
        const teachers = await Teachers.find();
        res.status(200).json(teachers);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

app.get('/start', (req,res) => {
    res.send("welcome to InsightEdge");
});

app.listen(PORT, () => {
    console.log('listening on port: http://localhost:',PORT );
})