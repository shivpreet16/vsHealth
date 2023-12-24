import React, { useEffect, useState } from "react";
import { useLocation,useNavigate,Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios"


const Dashboard = () => {

  const getCookie=(name)=>{
    return Cookies.get(name)
  }
  const location = useLocation();
  const email = location.state;
  const nav=new useNavigate()
  // const arr=[{
  //   name:"abs"
  // }]
  const [doctors, setDoctors] = useState([])

  useEffect(()=>{
    // const cookie=JSON.parse(getCookie('vsHealth'))
    // axios.post("https://localhost:3000/user/authenticate",cookie).then(response=>{
    //   console.log(response)
    // }).catch(err=>{
    //   console.log(err)
    // })
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
