import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import state from "../state";
import { useSnapshot } from "valtio";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DoctorAutocomplete from "../components/DoctorAutocomplete";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state;

  useEffect(() => {
    axios
      .get("https://localhost:3000/doctor/getDoctors")
      .then((response) => {
        state.doctors = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const snap = useSnapshot(state);
  return (
    <div className="flex items-center w-screen h-screen flex-col">
      <DashboardNav />
      <div className="mt-10 text-[50px]">Search for Doctor</div>
      <DoctorAutocomplete doctors={snap.doctors}/>
    </div>
  );
};

export default Dashboard;
