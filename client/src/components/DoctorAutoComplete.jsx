import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const DoctorAutocomplete = ({ doctors }) => {
    const nav=useNavigate()
    const handleChange=(e,selected)=>{
        console.log(selected)
        nav(`/dashboard/${selected.value}`)

    }
  const doctorOptions = doctors.map((doctor) => ({
    label: `${doctor.name} - ${doctor.specialization} (${doctor.experience} years)`,
    name: doctor.name,
    value: doctor._id,
  }));

  return (
    <Autocomplete
    sx={{
        width:"80vw",
        marginTop:"20px"
    }}
      options={doctorOptions}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
          <TextField {...params} label="Doctor" />
      )}
      onChange={handleChange}
    />
  );
};

export default DoctorAutocomplete;
