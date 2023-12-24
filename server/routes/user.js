const express = require("express");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

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


router.route("/checkOTP").post((req,res)=>{
  const {email,otp}=req.body;

  Users.checkOTP(email,otp).then(message=>{
    const payload={
      email:email
    }
    
    const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'24h'})

    const data={
      message,
      token
    }
    res.send(data)

  }).catch(err=>{
    console.log(err)
    res.status(400).send("internal server error at /checkOTP")
  })
  
})

router.route("/authenticate").post((req,res)=>{
  const {cookie}=req.body

  jwt.verify(cookie.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      res.send( "not verified")

    } else {
        res.send( "verified")
    }});  
})

module.exports = router;
