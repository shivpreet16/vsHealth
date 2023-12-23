import React from "react";
import { useLocation,useNavigate,Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const Dashboard = ({doctors}) => {
  const location = useLocation();
  const email = location.state;
  const nav=new useNavigate()
  
  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.name}>
            <Link to={`/dashboard/${doctor.name}`}>{doctor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
