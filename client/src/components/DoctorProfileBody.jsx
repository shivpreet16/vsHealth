import React from "react";
import femaleDoctor from "../assets/doctor_Female.svg";
import maleDoctor from "../assets/doctor_Male.svg";
import { Avatar, Typography, Card } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookButton from "./BookButton";

const DoctorProfileBody = ({
  doctorName,
  gender,
  specialization,
  education,
}) => {
  return (
    <div className="px-20 flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full md:px-36 px-0">
        <div className="flex flex-col items-center justify-center gap-2">
          <Avatar
            src={gender === "Female" ? femaleDoctor : maleDoctor}
            alt="doctor-avatar"
            sx={{
              height: "200px",
              width: "200px",
              border: "4px solid #64BC6E",
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: "semibold" }}>
            {doctorName}
          </Typography>
          <div className="flex flex-col gap-1 items-center justify-center">
            <Typography variant="p" sx={{ fontWeight: "semibold" }}>
              {specialization}
            </Typography>
            <div className="flex">
              {education.map((degree, index) => (
                <div key={index} className="flex">
                  <Typography variant="p" sx={{ fontWeight: "semibold" }}>
                    {degree}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "semibold" }}
                    className={
                      index == education.length - 1 ? "hidden" : "block"
                    }
                  >
                    ,
                  </Typography>
                </div>
              ))}
            </div>
           <BookButton />
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center md:px-10">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Book a Clinc Appointment
          </Typography>
          <Card className="flex flex-col w-[50vw] md:w-[25vw] gap-5 px-5 py-5 mt-5 relative">
            <AccessTimeIcon sx={{ color: "#64BC6E" }} />
            <div>
              <Typography>Next Available at</Typography>
              <Typography sx={{ color: "#64BC6E" }}>
                12:00 PM, Tomorrow
              </Typography>
            </div>
            <LocationOnIcon sx={{ color: "#64BC6E" }} />
            <Typography variant="p" sx={{ color: "slategray" }}>
              Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal
              Nagar, Maharashtra, 421302
            </Typography>
          </Card>
          <div className="w-64 h-64 bg-[#EFFFE5] rounded-full absolute -bottom-80 -z-10 md:bottom-16"></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileBody;