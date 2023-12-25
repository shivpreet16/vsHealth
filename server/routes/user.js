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
          const email=decode.email
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
            subject: "Appointment details - vsHealth",
            text: `
            Dear ${r.dataValues.patientName},
            Your appointment id is ${r.dataValues.aid}.
            Appointment details:
            - ${body.docName}
            - Type: ${body.type==0?"in-clinic":body.type==0?"Audio meeting":"Video meeting"}
            - Time: ${body.time}
            `,
          };

          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error("Error sending email", err);
              res.status(500).send("Internal server error");
            } else {
              console.log("Email sent:", info.response);
              res.send("Appointment successful. Find details on your email. Thank you!");
            }
          });

        })
        .catch((e) => {
          console.log(e);
          res.send("Internal server erro");
        });
    })
    .catch((e) => {
      console.error(e);
      res.send("Internal server erroe");
    });
});

module.exports = router;
