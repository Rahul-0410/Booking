const express= require('express');
const app=express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const  User= require('./Models/User');
const bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGO_URL);
const bcryptSalt= bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.get('/text',(req,res)=>{
    res.json('Hello World');
})

app.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const userDoc=  await User.create({
            name,
            email,
            password: bcrypt.hashSync(password,bcryptSalt),
        })
    } catch(err){
        res.status(422).json(err);
    }
    // res.json(userDoc);
})

app.listen(3001);