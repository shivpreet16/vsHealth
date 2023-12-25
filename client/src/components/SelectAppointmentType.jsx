import React from "react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const SelectAppointmentType = ({appointmentType, setAppointmentType, handleAudio, handleVideo, handleInClinic}) => {
  const unselectedSX = {
    bgcolor: "white",
    color: "black",
    height:"50px",
    padding:"5px",
    width:"50px",
    borderRadius:"5px"
  };
  const selectedSX = {
    bgcolor: "#64BC6E",
    color: "white",
    height:"50px",
    padding:"5px",
    width:"50px",
    borderRadius:"5px"
  };
    return (
    <div className="flex gap-8">
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleInClinic}
          >
            <LocalHospitalIcon sx={appointmentType == 2? selectedSX : unselectedSX}/>
            <span className={` bottom-1 ${appointmentType==2?'':'text-black'}`}>In-Clinic</span>
          </div>
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleAudio}
          >
            <PhoneIcon sx={appointmentType == 0? selectedSX : unselectedSX}/>
            <span className={` bottom-1 ${appointmentType==0?'':'text-black'}`}>Audio</span>
          </div>
          <div
            className="flex flex-col justify-center items-center relative cursor-pointer"
            onClick={handleVideo}
          >
            <VideoCameraFrontIcon sx={appointmentType == 1? selectedSX : unselectedSX}/>
            <span className={` bottom-1 ${appointmentType==1?'':'text-black'}`}>Video</span>
          </div>
        </div>
  );
};

export default SelectAppointmentType;