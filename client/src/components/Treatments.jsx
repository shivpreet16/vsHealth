import React from "react";
import { Typography } from "@mui/material";
import HealingIcon from "@mui/icons-material/Healing";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import InvertButton from "./InvertButton";

const TreatmentCard = ({ index, treatment }) => {
  const treatmentImages = [HealingIcon, HealthAndSafetyIcon, LocalHospitalIcon];
  const Image = treatmentImages[index];
  return (
    <div className="shadow rounded-md px-5 py-10 flex flex-col items-center justify-center hover:scale-110 overflow-hidden cursor-pointer">
      <Image sx={{ color: "#64BC6E", height:"80px" }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        {treatment.name}
      </Typography>
      <Typography variant="p" sx={{ textAlign: "center" }}>
        {treatment.description}
      </Typography>
    </div>
  );
};

const Treatments = ({ treatments }) => {
  return (
    <div className=" mt-20 md:px-20 px-10 flex flex-col items-center gap-5 md:gap-10">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Treatments
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} index={index} treatment={treatment} />
        ))}
      </div>
      <InvertButton text="see more"/>
    </div>
  );
};

export default Treatments;