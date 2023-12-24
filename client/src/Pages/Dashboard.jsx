import React, { useEffect, useState } from "react";
import { useLocation,useNavigate,Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import axios from "axios"


const Dashboard = () => {

  
  const location = useLocation();
  const email = location.state;
  const nav=new useNavigate()

  const [doctors, setDoctors] = useState([])

  useEffect(()=>{
    
    //need to user authentication

    axios.get("https://localhost:3000/doctor/getDoctors").then(response=>{
      setDoctors(response.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <Link to={`/dashboard/${doctor.name}`}>{doctor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
