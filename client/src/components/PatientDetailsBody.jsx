import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import { useLocation, useParams } from "react-router-dom";
import {
  Card,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Button,
  FormLabel,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FormDatePicker from "./FormDatePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import axios from "axios";

const PatientDetailsBody = ({selectedDoctor}) => {
  const location = useLocation();
  const state = location.state;
  const appointmentType = state.type;
  const fees = state.fees;
  const time = state.time;
  const date = state.date;
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "female",
    dob: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      ...formData,
      ...state,
    };

    axios.post("https://localhost:3000/user/book",body).then(r=>{
        alert(r.data)
    }).catch(e=>console.log(e))
  };
  return (
    <div className="bg-white w-screen lg:w-3/4">
      <DoctorHeader
        id={selectedDoctor._id}
        name={selectedDoctor.name}
        gender={selectedDoctor.gender}
        specialization={selectedDoctor.specialization}
      />
      <div className="mt-10 px-20">
        <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Appointment Summary
        </Typography>
        <div className="flex justify-between mt-5 flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex items-center gap-5">
            <LocalHospitalIcon sx={{ color: "#64bc6e", fontSize: "40px" }} />
            <div>
              <Typography sx={{ fontWeight: "bold", color: "black" }}>
                {appointmentType == 2
                  ? "In-Clinic Consultation"
                  : appointmentType == 1
                  ? "Video Consultation"
                  : "Audio Consultation"}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#64bc6e" }}>
                Fees approx{" "}
                <CurrencyRupeeIcon
                  sx={{ fontSize: "12px", color: "#64bc6e" }}
                />
                {fees}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#715ac4" }}>
                (Pay at Clinic)
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="flex gap-1">
              <AccessTimeIcon sx={{ color: "#64bc6e" }} />
              <Typography>{time}</Typography>
            </div>
            <div className="flex gap-1">
              <EventAvailableIcon sx={{ color: "#64bc6e" }} />
              <Typography>{`${date.getDate()}-${date.getMonth() + 1}-${
                date.getYear() - 100
              }`}</Typography>
            </div>
          </div>
          <div>
            <Typography
              sx={{
                color: "#1976D2",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={(e) => {
                window.history.back();
              }}
            >
              Change Date & Time
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-10 px-20">
        <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Fill Summary
        </Typography>
        <form className="pt-5" onSubmit={handleSubmit}>
          <div className="flex md:justify-between flex-col md:flex-row gap-5 md:gap-0">
            <TextField
              variant="standard"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <div className="">
              <FormLabel id="gender" sx={{ color: "slategray" }}>
                Gender
              </FormLabel>

              <RadioGroup
                aria-labelledby="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <div className="flex">
                  <FormControlLabel
                    value="male"
                    control={<Radio color="success" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="success" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="success" />}
                    label="Other"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="pt-5">
            <FormLabel id="dob" sx={{ color: "slategray" }}>
              Date of Birth
            </FormLabel>
            <FormDatePicker
              handleDateChange={handleDateChange}
              formData={formData}
            />
          </div>
          <div className="pt-5 pb-10">
            <Button 
            type="submit"
            variant="contained">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientDetailsBody;
