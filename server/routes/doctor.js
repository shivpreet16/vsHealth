const express = require("express");
const Doctors = require("../models/doctors.model");
const Slots = require("../models/slots.model");
const Clinics = require("../models/clinics.model");
const router = express.Router();
const { doctorData, slotData } = require("../utils/constants");
const { Sequelize } = require("sequelize");

router.route("/dummy").get((req, res) => {
  async function getAllDoctors() {
    const doctors = await Doctors.find();
    return doctors;
  }
  getAllDoctors()
    .then((doctors) => {
      //   console.log(doctors);
      let arr = [];
      doctors.map((d) => {
        arr.push(d._id);
      });
      console.log(arr);

      res.send(arr);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Internal server error at /getDoctors");
    });
});

router.route("/getDoctors").get((req, res) => {
  async function getAllDoctors() {
    const doctors = await Doctors.find();
    return doctors;
  }

  getAllDoctors()
    .then((doctors) => {
      res.send(doctors);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Internal server error at /getDoctors");
    });
});

router.route("/putDoctors").get((req, res) => {
  async function putDoc(docDetails) {
    const doctor = new Doctors(docDetails);

    await doctor.save();
    return "success";
  }

  doctorData.map((doctorDetails) => {
    putDoc(doctorDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  res.send("ok");
});

router.route("/insertSlot").get((req, res) => {
  slotData.map((slot) => {
    Slots.create({
      did: slot.did,
      cid: slot.cid,
      day: slot.day,
      time: slot.time,
    })
      .then((res) => {
        console.log(res.toJSON());
      })
      .catch((e) => {
        console.log(e);
      });
  });

  res.send("ok");
});



async function getClinicNamesByDoctorId(doctorId) {
  try {
    const distinctCids = await Slots.findAll({
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("cid")), "cid"]],
      where: {
        did: doctorId,
      },
    });

    const clinicIds = distinctCids.map((clinic) => clinic.cid);

    const clinicNames = await Clinics.findAll({
      attributes: ["cid","address"],
      where: {
        cid: clinicIds,
      },
    });

    const clinicAddr = clinicNames.map((clinic) => (
      {
        cid:clinic.cid,
        addr:clinic.address
      }
    ));
    return clinicAddr;
  } catch (error) {
    console.error("Error retrieving clinic names:", error);
    throw error;
  }
}

router.route("/getClinics").post((req, res) => {
  const { did } = req.body;
  getClinicNamesByDoctorId(did)
  .then((r) => res.send(r))
  .catch((e) => {
    console.log("Internal server error at /get clinics : ",e)
    res.send(e);
  });
});

async function getSlotTime({did,cid,day}){
  console.log(did)
  console.log(cid)
  console.log(day)
  try{
    const slotTime=await Slots.findAll({
      attributes:['sid','time'],
      where:{
        cid:cid,
        did:did,
        day:day
      }
    })
    
    // console.log(slotTime)
    return slotTime
  }catch(error){
    console.error("Error retrieving slot time:", error);
    throw error;

  }
}
router.route("/getTimeSlots").post((req,res)=>{
  const body=req.body
  getSlotTime(body).then(r=>console.log(r)).catch(e=>console.log(e))
  res.send("ok")
})
module.exports = router;
