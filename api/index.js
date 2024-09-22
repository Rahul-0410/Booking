const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json('Hello World');
})

app.listen(3001);