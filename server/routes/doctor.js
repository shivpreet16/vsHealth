const express = require("express");
const Doctors = require("../models/doctors.model");
const Slots = require("../models/slots.model");
const Clinics = require("../models/clinics.model");
const SlotAVs = require("../models/slotAV.model")
const router = express.Router();
const { doctorData, slotData, slotAvData } = require("../utils/constants");
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
    
    const slotTimeArr = slotTime.map((slot) => (
      {
        sid:slot.sid,
        time:slot.time
      }
    ));
    return slotTimeArr
  }catch(error){
    console.error("Error retrieving slot time:", error);
    throw error;
  }
}
async function getSlotTimeAV({did,type,day}){
  try{
    const slotTime=await SlotAVs.findAll({
      attributes:['savid','time'],
      where:{
        type:type,
        did:did,
        day:day
      }
    })
    
    const slotTimeArr = slotTime.map((slot) => (
      {
        savid:slot.savid,
        time:slot.time
      }
    ));
    return slotTimeArr
  }catch(error){
    console.error("Error retrieving slot time:", error);
    throw error;
  }
}
router.route("/getTimeSlots").post((req,res)=>{
  const body=req.body
  if(body.type===2){

    getSlotTime(body).then(r=>{
      res.send(r)
    }).catch(e=>{
      console.error(e)
      res.send("Internal server error")
    })
  }else{
    getSlotTimeAV(body).then(r=>{
      res.send(r)
    }).catch(e=>{
      console.error(e)
      res.send("Internal server error")
    })
    
  }
})

async function getCountByDay(did,cid) {
  try {
    const result = await Slots.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('*')), 'slotCount'],
        'day',
      ],
      where:{
        did:did,
        cid:cid
      },
      group: ['day'],
    });

    const formattedResult = {};

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    daysOfWeek.forEach((day) => {
      formattedResult[day] = '-';
    });

    result.forEach((row) => {
      const day = row.get('day');
      const slotCount = row.get('slotCount');
      formattedResult[day] = slotCount;
    });

    return formattedResult;
  } catch (error) {
    console.error('Error getting count by day:', error);
    throw error;
  }
}
async function getCountByDayAV(did,type) {
  try {
    const result = await SlotAVs.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('*')), 'slotCount'],
        'day',
      ],
      where:{
        did:did,
        type:type
      },
      group: ['day'],
    });

    const formattedResult = {};

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    daysOfWeek.forEach((day) => {
      formattedResult[day] = '-';
    });

    result.forEach((row) => {
      const day = row.get('day');
      const slotCount = row.get('slotCount');
      formattedResult[day] = slotCount;
    });

    return formattedResult;
  } catch (error) {
    console.error('Error getting count by day:', error);
    throw error;
  }
}
router.route("/getNumberOfSlots").post((req,res)=>{
  if(req.body.type == 2){
    getCountByDay(req.body.did,req.body.cid).then(resp=>{
      // console.log(resp)
      res.send(resp)
    }).catch(e=>res.send("Inernal Server Error at /getNumberOfSlots"))
  }  else{
    //audio=0, video=1
    getCountByDayAV(req.body.did,req.body.type).then(resp=>{
      console.log(resp)
      res.send(resp)
    }).catch(e=>res.send("Inernal Server Error at /getNumberOfSlots"))

  }
})

router.route("/insertSlotAv").get((req,res)=>{
  slotAvData.map((slot) => {
    SlotAVs.create({
      did: slot.did,
      day: slot.day,
      time: slot.time,
      type:slot.type
    })
      .then((res) => {
        console.log(res.toJSON());
      })
      .catch((e) => {
        console.log(e);
      });
  });

  res.send("ok");
})

module.exports = router;
