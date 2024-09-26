const express= require('express');
const app=express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const  User= require('./Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const jwtSecret='ye2td136e13e8723ydghewhfwetgjer'
app.post('/login', async (req,res)=>{
    const {email,password} = req.body;
   const userDoc= await User.findOne({email});
   if(userDoc){
      const passOk= bcrypt.compareSync(password,userDoc.password);
      if(passOk){
        jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json(userDoc);
        })
      } else{
          res.status(401).json('wrong password');
      }
    } else{
       res.status(404).json('not found');
   }
})

app.listen(3001);