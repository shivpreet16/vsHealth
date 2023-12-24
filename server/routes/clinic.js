const express=require("express")
const Clinic = require("../models/clinics.model");
const router=express.Router()
const {clinicData}=require("../utils/constants")

router.route("/insertClinics").get((req,res)=>{

    clinicData.map(c=>{
        Clinic.create({
            address:c[0],
            phNo:c[1]
        }).then(clinic=>{
            console.log(clinic.toJSON())
        }).catch(e=>{
            console.log(e)
        })
    })
    res.send("ok")
})

module.exports=router