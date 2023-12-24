import React from "react";
import { useLocation } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import DoctorProfileBody from "../components/DoctorProfileBody";
import AboutDoctor from "../components/AboutDoctor";
import state from "../state";
import { useSnapshot } from "valtio";

const DoctorProfile = () => {
  const snap = useSnapshot(state);
  const location = useLocation();
  const doctorName = location.state;
  const selectedDoctor = snap.doctors.find(
    (doctor) => doctor.name === doctorName
  );

  return (
    <div className="overflow-x-hidden">
      <ProfileNav doctorName={doctorName} />
      <DoctorProfileBody
        doctorName={doctorName}
        gender={selectedDoctor.gender}
        specialization={selectedDoctor.specialization}
        education={selectedDoctor.education}
      />
      <AboutDoctor doctorName={doctorName} about={selectedDoctor.biography} />
    </div>
  );
};

export default DoctorProfile;
