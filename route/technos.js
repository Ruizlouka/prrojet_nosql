const express=require('express')
const router=express.Router()

const Tecnos = require('../model/Tecnos');




router.get("/",(req,res)=>{
    let {embed}=req.query;
    Tecnos.find().populate(embed)
    .then(tecnos=>res.send(tecnos))
    .catch(err=>console.log(err))
})


router.post("/",(req,res)=>{
    const { name }= req.body
    const newTecnos=new Tecnos({
        name
    })
    newTecnos.save() 
    .then(tecnos=>res.send(tecnos))
    .catch(err=>console.log(err))
})



router.get("/:_id",(req,res)=>{
    const {_id}=req.params
   Tecnos.findOne({_id:_id})
      .then(name=>res.send(name))
    .catch(err=>console.log(err))
})



router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { name}=req.body
    Tecnos.findOneAndUpdate({_id},{ name})
    .then(m=>res.send(m))
    .catch(err=>console.log(err))
})


module.exports=router
