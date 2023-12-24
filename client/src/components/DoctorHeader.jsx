import React from 'react';

import doctorMaleImage from "../assets/doctor_Male.svg";
import doctorFemaleImage from "../assets/doctor_Female.svg";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DoctorHeader = ({name, specialization, gender}) => {
    const imagePath = gender === "Male" ? doctorMaleImage : doctorFemaleImage;
    const nav = new useNavigate();

    const handleViewProfile = (e) => {
        e.preventDefault();
        nav("/doctor", { state: id });
      };
  return (
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
  )
}

export default DoctorHeader