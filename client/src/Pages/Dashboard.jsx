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
