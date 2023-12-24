import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import DoctorDetails from './Pages/DoctorDetails';
import DoctorProfile from './Pages/DoctorProfile';
import state from './state';
import { useSnapshot } from "valtio";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from "axios"

export default function App() {
  const snap = useSnapshot(state);
  const doctors = [];
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const getCookie = (name) => {
    return Cookies.get(name);
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      if (getCookie('vsHealth') === undefined) {
        state.isAuthenticated = false;
      } else {
        const cookie = JSON.parse(getCookie('vsHealth'));
        const body = { cookie: cookie };

        try {
          const response = await axios.post("https://localhost:3000/user/authenticate", body);
          if (response.data !== "verified") {
            state.isAuthenticated = false;
          } else {
            console.log(response.data);
            state.isAuthenticated = true;
          }
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    checkAuthentication();
  }, []);
  
  
  useEffect(() => {
    axios
    .get("https://localhost:3000/doctor/getDoctors")
    .then((response) => {
      state.doctors = response.data;
    })
    .catch((err) => {
      console.log(err);
    }).finally(()=>{
      setIsLoadingData(false);
      
      })
  }, []);

  if (isLoading || isLoadingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={state.isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} />
        <Route
          path="/dashboard/:doctorId"
          element={state.isAuthenticated ? <DoctorDetails /> : <Navigate to="/" replace />}
        />
        <Route path="/doctor" element={state.isAuthenticated ? <DoctorProfile doctors={doctors} /> : <Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}
