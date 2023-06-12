const express = require('express');
const router=require('./routes/commercialroutes')
const app = express()

app.get('/',(req,res)=>{
    res.send("welcome to commercial website")
})
app.use('/router',router)
app.listen(3500,()=>{
    console.log("server staring at PORT 3500");
})