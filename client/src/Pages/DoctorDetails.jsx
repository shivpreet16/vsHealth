// DoctorDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import BookingNav from "../components/BookingNav";
import BookingBody from "../components/BookingBody";

const DoctorDetails = ({ doctors }) => {
  const { doctorName } = useParams();

  // Find the selected doctor from the array
  const selectedDoctor = doctors.find((doctor) => doctor.name === doctorName);

  // if (!selectedDoctor) {
  //   return <div>No doctor found with the name {doctorName}</div>;
  // }

  {
    /*•	Name: string
•	Biography: string
•	Specialization: 
•	Education: string[]
•	Experience: number
•	FAQ: {}
 */
  }
  
  return (
    <div>
      <BookingNav name={selectedDoctor.name} />

      <section className="bg-[#E5E5E5] h-fit w-full flex flex-col items-center justify-center">
        <BookingBody
          name={selectedDoctor.name}
          specialization={selectedDoctor.specialization}
          gender={selectedDoctor.gender}
          fees={selectedDoctor.fees}

        />
      </section>
      {/* FAQ */}
    </div>
  );
};

export default DoctorDetails;
