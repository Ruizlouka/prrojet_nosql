const express=require('express')
const router=express.Router()

const Favoris = require('../model/Favoris');




router.get("/",(req,res)=>{
    let {embed}=req.query;
    Favoris.find().populate(embed)
    .then(favoris=>res.send(favoris))
    .catch(err=>console.log(err))
})


router.post("/",(req,res)=>{
    const {id_utilisateur,id_mission }= req.body
    const newFavoris=new Favoris({
        id_utilisateur,id_mission
    })
    newFavoris.save() 
    .then(favoris=>res.send(favoris))
    .catch(err=>console.log(err))
})



router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Favoris.findOne({_id:_id})
      .then(id_mission=>res.send(id_mission))
    .catch(err=>console.log(err))
})



router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { id_utilisateur,id_mission}=req.body
  Favoris.findOneAndUpdate({_id},{ id_utilisateur,id_mission})
    .then(m=>res.send(m))
    .catch(err=>console.log(err))
})


module.exports=router
