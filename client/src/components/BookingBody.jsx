import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  ToggleButton,
} from "@mui/material";
import doctorMaleImage from "../assets/doctor_Male.svg";
import doctorFemaleImage from "../assets/doctor_Female.svg";
import audio from "../assets/Audio_b.png";
import clinic from "../assets/In-Clinic.png";
import video from "../assets/video_b.png";
import DateTabs from "./DateTabs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import state from "../state";
import { useSnapshot } from "valtio";
import DoctorHeader from "./DoctorHeader";

const BookingBody = ({ id, name, specialization, gender, fees }) => {
  const imagePath = gender === "Male" ? doctorMaleImage : doctorFemaleImage;
  const [isClinic, setIsClinic] = useState(true);
  const [clinics, setClinics] = useState([]);
  const [slot, setSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState(-1);
  const [selectedClinic, setSelectedClinic] = useState(-1);

  const nav = new useNavigate();
  const snap = useSnapshot(state);

  useEffect(() => {
    axios
      .post("https://localhost:3000/doctor/getClinics", { did: id })
      .then((response) => {
        setClinics(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleViewProfile = (e) => {
    e.preventDefault();
    nav("/doctor", { state: id });
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      cid:selectedClinic,
      did:id,
      
    }
  }

  const handleInClinic = (e) => {
    e.preventDefault();
    setIsClinic(true);
  };
  const handleAudio = (e) => {
    e.preventDefault();
    setIsClinic(false);
    setSelectedTime(-1)
    setSelectedClinic(-1)
  };
  const handleVideo = (e) => {
    e.preventDefault();
    setIsClinic(false);
    setSelectedTime(-1)
    setSelectedClinic(-1)
  };

  const getDayName = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const handleRadioChange = async (e) => {
    const cid = e.target.value;
    setSelectedClinic(cid)
    if (cid != undefined) {
      if (!snap.date) state.date = new Date();

      const body = {
        did: id,
        cid: cid,
        day: getDayName(snap.date)
      };

      axios
        .post("https://localhost:3000/doctor/getTimeSlots", body)
        .then((res) => {
          setSlot(res.data);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="bg-white w-screen lg:w-3/4">
      <DoctorHeader name={name} specialization={specialization} gender={gender}/>

      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between mx-16 lg:mx-6 pt-4">
        <div className="flex flex-row lg:flex-col justify-between">
          <p className="font-black">Book Appointment</p>
          <div className="grid gap-1">
            <p className="hidden lg:block text-sm text-[#948e8e] font-medium">
              Select Your Consultation Type
            </p>
            <p className="text-[#64bc6e] font-semibold text-xs">
              Fees approx Rs. {fees}
            </p>
            <p className="text-[#715ac4] font-semibold text-xs">
              (pay at clinic)
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleInClinic}
          >
            <img src={clinic} className="" height={85} width={85} />
            <span className="absolute bottom-1 text-white">In-Clinic</span>
          </div>
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleAudio}
          >
            <img src={audio} className="" height={85} width={85} />
            <span className="absolute bottom-1">Audio</span>
          </div>
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleVideo}
          >
            <img src={video} className="" height={85} width={85} />
            <span className="absolute bottom-1">Video</span>
          </div>
        </div>
      </div>

      <div
        className={`mx-5 md:mx-16 lg:mx-6 pt-10 ${
          isClinic === true ? "block" : "hidden"
        }`}
      >
        <FormControl sx={{}} variant="standard">
          <Typography
            sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
          >
            Clinic Name
          </Typography>
          <RadioGroup name="clinic">
            {clinics.map((clinic) => (
              <FormControlLabel
                onClick={handleRadioChange}
                value={clinic.cid}
                control={<Radio color="success" />}
                label={clinic.addr}
                key={clinic.cid}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div className="mt-10 pb-10 relative">
          <DateTabs setSlot={setSlot} cid={selectedClinic} did={id} />
          <ul className="h-fit gap-5 min-h-[40vh] bg-slate-100 text-xs md:text-sm grid grid-cols-3 justify-center px-2  pt-16 pb-5">
            {slot.map((i) => (
              <li
                key={i.sid}
                value={i.sid}
                onClick={(e) => {
                  setSelectedTime(e.target.value);
                  console.log(e.target.value);
                }}
                className={`border-2 rounded-md grid justify-center items-center hover:bg-slate-200 duration-100 cursor-pointer ${
                  i.sid === selectedTime
                    ? "bg-[#64BC6E] text-white"
                    : "text-black"
                }`}
              >
                {i.time}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Button 
            sx={{
              bgcolor:"#64BC6E",
              fontWeight:"bold",
              '&:hover':{
                bgcolor:"white",
                color:"#64BC6E",
              }
            }}
            variant="contained" onClick={handleSubmit}>
              submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBody;
