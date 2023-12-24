import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import DoctorDetails from './Pages/DoctorDetails';
import DoctorProfile from './Pages/DoctorProfile';
// import { AuthProvider } from './context/AuthContext.jsx';
// import { ProtectedRoute } from './context/ProtectedRoute.jsx';

export default function App() {
  const doctors = []
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/:doctorName"
          element={<DoctorDetails doctors={doctors} />}
        />
        <Route path="/doctor" element={<DoctorProfile doctors={doctors} />} />
      </Routes>
    </div>
  )
}