import React, { useEffect, useState } from "react";

import BookingNav from "../components/BookingNav";
import BookingBody from "../components/BookingBody";
import state from "../state";
import { useSnapshot } from "valtio";
import { useLocation } from "react-router-dom";
import Faqs from "../components/Faqs";
import axios from "axios";
import { Input } from "@mui/material";
import PatientDetailsBody from "../components/PatientDetailsBody";

const InputPatientDetails = () => {
  const location = useLocation();
  const doc = location.state;

  const snap = useSnapshot(state);
  const selectedDoctor = state.doctors.find((doctor) => doctor._id === doc.did);
  return (
    <div className=" overflow-x-hidden">
      <BookingNav name={selectedDoctor.name}/>

      <section className="bg-[#E5E5E5] h-fit w-full flex flex-col items-center justify-center ">
        <PatientDetailsBody selectedDoctor={selectedDoctor}/>
      </section>
    </div>
  );
};

export default InputPatientDetails;