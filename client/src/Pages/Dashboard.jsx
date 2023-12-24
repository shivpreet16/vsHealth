import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import state from '../state';
import { useSnapshot } from "valtio";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state;
  
  // const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://localhost:3000/doctor/getDoctors")
    .then((response) => {
      // setDoctors(response.data);
      state.doctors=response.data
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const snap = useSnapshot(state);
  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {snap.doctors.map((doctor) => (
          <li key={doctor._id}>
            <Link to={`/dashboard/${doctor.name}`}>{doctor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
