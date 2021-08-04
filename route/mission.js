const express=require('express')
const router=express.Router()

const Mission = require('../model/Mission');


// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/marques/
// [GET] localhost:5000/marques/


router.get("/",(req,res)=>{
    let {embed}=req.query;
    Mission.find().populate(embed)
    .then(mission=>res.send(mission))
    .catch(err=>console.log(err))
})


router.post("/",(req,res)=>{
    const { name,localisation,duree,date_de_debut,date_de_fin,is_remote, is_active,id_utilisateur,tecnos }= req.body
    const newMission=new Mission({
        name,localisation,duree,date_de_debut,date_de_fin,is_remote, is_active,id_utilisateur,tecnos
    })
    newMission.save() 
    .then(mission=>res.send(mission))
    .catch(err=>console.log(err))
})



router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Mission.findOne({_id:_id})
      .then(id_utilisateur=>res.send(id_utilisateur))
    .catch(err=>console.log(err))
})



router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { name,localisation,duree,date_de_debut,date_de_fin,is_remote, is_active,id_utilisateur,tecnos}=req.body
    Mission.findOneAndUpdate({_id},{ name,localisation,duree,date_de_debut,date_de_fin,is_remote, is_active,id_utilisateur,tecnos})
    .then(m=>res.send(m))
    .catch(err=>console.log(err))
})


module.exports=router
