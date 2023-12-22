import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  )
}