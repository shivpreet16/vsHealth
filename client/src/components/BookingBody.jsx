import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
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

const BookingBody = ({ id, name, specialization, gender, fees }) => {
  const imagePath = gender === "Male" ? doctorMaleImage : doctorFemaleImage;
  const [isClinic, setIsClinic] = useState(true);
  const [clinics, setClinics] = useState([]);

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

  const handleInClinic = (e) => {
    e.preventDefault();
    setIsClinic(true);
  };
  const handleAudio = (e) => {
    e.preventDefault();
    setIsClinic(false);
  };
  const handleVideo = (e) => {
    e.preventDefault();
    setIsClinic(false);
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
    if (cid != undefined) {
      console.log("cid:", cid);
      if (!snap.date) state.date = new Date();

      const body = {
        did: id,
        cid: cid,
        day: getDayName(snap.date),
      };

      axios
        .post("https://localhost:3000/doctor/getTimeSlots", body)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="bg-white w-screen lg:w-3/4">
      <div className="pt-7 lg:pt-8 flex gap-4 sm:gap-16 mx-10 sm:ml-20 lg:mx-0 border-b-[1px] pb-4 ">
        <Avatar
          alt="doctor avatar"
          sx={{ width: 75, height: 75, marginLeft: 5 }}
          src={imagePath}
        />
        <div>
          <h3 className=" font-black leading-5">{name}</h3>
          <h4 className="text-xs mb-2">{specialization}</h4>
          <Button
            variant="outlined"
            size="small"
            sx={{
              fontWeight: "bolder",
              fontSize: "0.7rem",
              "&:hover": {
                textDecoration: "underline",
              },
              height: "2.8em",
            }}
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
        </div>
      </div>

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
        className={`mx-16 lg:mx-6 pt-10 ${
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
      </div>

      <div className="mt-10">
        <DateTabs />
      </div>
    </div>
  );
};

export default BookingBody;
