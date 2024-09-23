const express= require('express');
const app=express();
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

app.get('/text',(req,res)=>{
    res.json('Hello World');
})

app.listen(3001);