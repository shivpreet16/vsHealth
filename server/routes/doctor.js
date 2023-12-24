const express = require("express");
const Doctors = require("../models/doctors.model");
const router = express.Router();
const data = require("../utils/constants");

router.route("/getDoctors").get((req, res) => {
  async function getAllDoctors() {
    const doctors = await Doctors.find();
    return doctors;
  }

  getAllDoctors()
    .then((doctors) => {
    //   console.log(doctors);
      res.send(doctors);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Internal server error at /getDoctors")
    });
});

router.route("/putDoctors").get((req, res) => {
  async function putDoc(docDetails) {
    const doctor = new Doctors(docDetails);

    await doctor.save();
    return "success";
  }

  data.map((doctorDetails) => {
    putDoc(doctorDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  res.send("ok");
});

module.exports = router;
