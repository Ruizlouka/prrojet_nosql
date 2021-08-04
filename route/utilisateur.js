const express=require('express')
const router=express.Router()

const Utilisateur = require('../model/Utilisateur');






router.get("/",(req,res)=>{
    let {embed}=req.query;
    Utilisateur.find().populate(embed)
    .then(utilisateur=>res.send(utilisateur))
    .catch(err=>console.log(err))
})


router.post("/",(req,res)=>{
    const { nom ,mail,phone,avatar,createdDate,isAdmin }= req.body
    const newUtilisateur=new Utilisateur({
        nom ,mail,phone,avatar,createdDate,isAdmin
    })
    newUtilisateur.save() 
    .then(utilisateur=>res.send(utilisateur))
    .catch(err=>console.log(err))
})



router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Utilisateur.findOne({_id:_id})
      .then(utilisateur=>res.send(utilisateur))
    .catch(err=>console.log(err))
})



router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { nom ,mail,phone,avatar,createdDate,isAdmin}=req.body
    Utilisateur.findOneAndUpdate({_id},{ nom ,mail,phone,avatar,createdDate,isAdmin})
    .then(m=>res.send(m))
    .catch(err=>console.log(err))
})


module.exports=router
