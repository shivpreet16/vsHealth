const express = require("express");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Appointments = require("../models/appointments.model");

function generateOTP() {
  const otp = Math.floor(100000 + crypto.randomInt(999999));
  return otp.toString();
}

async function updateUser(email, otp) {
  try {
    const { user, created, isValidRequest } = await Users.updateOrCreateByEmail(
      email,
      otp
    );

    if (!isValidRequest) {
      return {
        success: false,
        message: "Please wait 2 minutes before sending another OTP request",
      };
    }

    if (created) {
      console.log("User created:", user.toJSON());
    } else {
      console.log("User found and updated:", user.toJSON());
    }

    return { success: true, message: "OTP updated successfully" };
  } catch (error) {
    console.error("Error in updateUser:", error);
    return { success: false, message: "Internal server error" };
  }
}

router.route("/generateOTP").post(async (req, res) => {
  const email = req.body.email;
  const otp = generateOTP();

  try {
    const result = await updateUser(email, otp);

    if (!result.success) {
      res.send(result.message);
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "OTP for login in vsHealth",
      text: `Your OTP is ${otp}. It is only valid for 2 minutes.`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email", err);
        res.status(500).send("Internal server error");
      } else {
        console.log("Email sent:", info.response);
        res.send("OTP sent successfully");
      }
    });
    // res.send("OTP sent successfully");
  } catch (error) {
    console.error("Error in /generateOTP route:", error);
    res.status(500).send("Internal server error");
  }
});

router.route("/checkOTP").post((req, res) => {
  const { email, otp } = req.body;

  Users.checkOTP(email, otp)
    .then((message) => {
      const payload = {
        email: email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      const data = {
        message,
        token,
      };
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("internal server error at /checkOTP");
    });
});

router.route("/authenticate").post((req, res) => {
  const { cookie } = req.body;

  jwt.verify(cookie.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      res.send("not verified");
    } else {
      res.send("verified");
    }
  });
});

async function getUserByEmail(email) {
  const user = await Users.findOne({
    attributes: ["uid"],
    where: {
      email: email,
    },
  });
  return user;
}

{
  /*
cid:"8"
date:Mon Dec 25 2023 14:12:32 GMT+0530 (India Standard Time) {}
did:"658828cf8a341add00cdc36a"
dob:M2 {$L: 'en', $u: undefined, $d: Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time), $y: 2023, $M: 11, …}
fees:403
fullName:"Shivpreet Padhi"
gender:"male"
slotId:40
time:"10:00 AM"
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZwcmVldDE2MDZAZ21haWwuY29tIiwiaWF0IjoxNzAzNDg2MzY4LCJleHAiOjE3MDM1NzI3Njh9.MJWhWfkdNORVKI1ZGcd3ziDgxuk__xNnKA6Pm7FPiQA"
type:2
*/
}

async function insertAppointment(body) {
  const appointment = await Appointments.create(body);

  return appointment;
}
router.route("/book").post((req, res) => {
  const body = req.body;
  const token = body.token;
  const decode = jwt.decode(token);
  // console.log(decode)
  let sid = null;
  let savid = null;
  getUserByEmail(decode.email)
    .then((r) => {
      const uid = r.dataValues.uid;
      if (body.type == 2) {
        sid = body.slotId;
      } else {
        savid = body.slotId;
      }
      const data = {
        uid: uid,
        patientName: body.fullName,
        sid: sid,
        savid: savid,
        date: body.date,
        type: body.type,
      };

      insertAppointment(data)
        .then((r) => {
          console.log(r);
          res.send("Appointment successful");
        })
        .catch((e) => {
          console.log(e);
          res.send("Internal server erroe");
        });
    })
    .catch((e) => {
      console.error(e);
      res.send("Internal server erroe");
    });
});

module.exports = router;
