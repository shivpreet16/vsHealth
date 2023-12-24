import React from "react";
import { useLocation } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import DoctorProfileBody from "../components/DoctorProfileBody";
import AboutDoctor from "../components/AboutDoctor";
import state from "../state";
import { useSnapshot } from "valtio";
import Treatments from "../components/Treatments";
import Blogs from "../components/Blogs";
import Faqs from "../components/Faqs";

const DoctorProfile = () => {
  const snap = useSnapshot(state);
  const location = useLocation();
  const doctorId = location.state;
  const selectedDoctor = snap.doctors.find((doctor) => doctor._id === doctorId);
  return (
    <div className="overflow-x-hidden">
      <ProfileNav id={selectedDoctor._id} doctorName={selectedDoctor.name} />
      <DoctorProfileBody
        id={selectedDoctor._id}
        doctorName={selectedDoctor.name}
        gender={selectedDoctor.gender}
        specialization={selectedDoctor.specialization}
        education={selectedDoctor.education}
      />
      <AboutDoctor
      id={selectedDoctor._id}
        doctorName={selectedDoctor.name}
        about={selectedDoctor.biography}
      />
      <Treatments treatments={selectedDoctor.treatments} />
      <Blogs />
      <Faqs faqs={selectedDoctor.FAQs}  />
    </div>
  );
};

export default DoctorProfile;
