const https = require("https");
const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoConnect, sqlConnect } = require("./utils/connect");
const userRoute = require("./routes/user");
const Users = require("./models/user.model");
const Clinics = require("./models/clinics.model")
const Appointments=require("./models/appointments.model")
const Slots=require("./models/slots.model")
const SlotAVs = require("./models/slotAV.model")
const doctorRoute = require("./routes/doctor")
const clinicRoute = require("./routes/clinic")

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  key: fs.readFileSync("vshealth-privateKey.key"),
  cert: fs.readFileSync("vshealth.crt"),
};

app.get("/", (req, res) => {
  res.send("Hello from server");
});

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log("Server listening at port: " + PORT);
});

mongoConnect();
const connection = sqlConnect();

const syncTables = async()=>{
  await Users.sync()
  await Clinics.sync()
  await Slots.sync()
  await SlotAVs.sync()
  await Appointments.sync()
}

syncTables()

app.use("/user", userRoute);
app.use("/doctor", doctorRoute);
app.use("/clinic", clinicRoute);


