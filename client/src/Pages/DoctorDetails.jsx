// DoctorDetails.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingNav from "../components/BookingNav";
import BookingBody from "../components/BookingBody";
import state from "../state";
import { useSnapshot } from "valtio";
import Faqs from "../components/Faqs";
import axios from "axios";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  console.log(doctorId);
  const snap = useSnapshot(state);
  const selectedDoctor = snap.doctors.find((doctor) => doctor._id === doctorId);
  
  return (
    <div>
      <BookingNav name={selectedDoctor.name} />

      <section className="bg-[#E5E5E5] h-fit w-full flex flex-col items-center justify-center rounded-lg">
        <BookingBody
          id={selectedDoctor._id}
          name={selectedDoctor.name}
          specialization={selectedDoctor.specialization}
          gender={selectedDoctor.gender}
          fees={selectedDoctor.fees}
        />
      </section>
      {/* FAQ */}
      <section className="bg-[#E5E5E5]">
        <Faqs faqs={selectedDoctor.FAQs} />
      </section>
    </div>
  );
};

export default DoctorDetails;
