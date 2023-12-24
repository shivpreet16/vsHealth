import React from "react";
import { useLocation } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import DoctorProfileBody from "../components/DoctorProfileBody";
import AboutDoctor from "../components/AboutDoctor";

const DoctorProfile = ({ doctors }) => {
  const location = useLocation();
  const doctorName = location.state;
  const selectedDoctor = doctors.find((doctor) => doctor.name === doctorName);
  return (
    <div className="overflow-x-hidden">
      <ProfileNav doctorName={doctorName} />
      <DoctorProfileBody
        doctorName={doctorName}
        gender={selectedDoctor.gender}
        specialization={selectedDoctor.specialization}
        education={selectedDoctor.education}
      />
      <AboutDoctor doctorName={doctorName} about={selectedDoctor.biography}/>
    </div>
  );
};

export default DoctorProfile;