const express = require('express');
const router =express.Router()
router.get('/',(req,res)=>{
    res.send("welcome to laptop session ")
})
let products =[
    {
        id:1,
        productName:"HP laptop ",
        price:60000
    },
    {
        id:2,
        productName:"lenova laptop ",
        price:50000
    }
];

router.get('/:id',(req,res)=>{
    res.send(`productName :${req.product.productName} price:${req.product.price}`)
})
router.params,("id",(req,res,next,id)=>{
  req.product =products[id]
  next()
})
module.exports=router