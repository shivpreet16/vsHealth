import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import DoctorDetails from './Pages/DoctorDetails';

export default function App() {
  const doctors = [
    {
      name: 'Dr. Davis',
      experience: 10,
      gender: 'Female',
      FAQs: {
        'What are common symptoms?': 'Common symptoms include...',
        'How is the condition diagnosed?': 'Diagnosis is typically done through...'
      },
      specialization: 'Pediatrician',
      education: [ 'MBBS', 'MS' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Hernandez',
      experience: 40,
      gender: 'Female',
      FAQs: { 'What are common symptoms?': 'Common symptoms include...' },
      specialization: 'OB-GYN',
      education: [ 'MD', 'Specialization' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Thomas',
      experience: 28,
      gender: 'Female',
      FAQs: { 'What are common symptoms?': 'Common symptoms include...' },
      specialization: 'Oncologist',
      education: [ 'MBBS', 'MS' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Miller',
      experience: 27,
      gender: 'Female',
      FAQs: {
        'What are common symptoms?': 'Common symptoms include...',
        'How is the condition diagnosed?': 'Diagnosis is typically done through...',
        'What are the treatment options?': 'Treatment options involve...'
      },
      specialization: 'Neurologist',
      education: [ 'MBBS', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Garcia',
      experience: 7,
      gender: 'Male',
      FAQs: {
        'What are the treatment options?': 'Treatment options involve...'
      },
      specialization: 'Oncologist',
      education: [ 'MD', 'Specialization' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Thomas',
      experience: 40,
      gender: 'Male',
      FAQs: {
        'How is the condition diagnosed?': 'Diagnosis is typically done through...'
      },
      specialization: 'Neurologist',
      education: [ 'MBBS', 'MS' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.'
    },
    {
      name: 'Dr. Thomas',
      experience: 38,
      gender: 'Female',
      FAQs: {
        'What are the treatment options?': 'Treatment options involve...'
      },
      specialization: 'Orthopedic Surgeon',
      education: [ 'MBBS', 'MS' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Garcia',
      experience: 27,
      gender: 'Female',
      FAQs: {
        'What are common symptoms?': 'Common symptoms include...',
        'How is the condition diagnosed?': 'Diagnosis is typically done through...'
      },
      specialization: 'Oncologist',
      education: [ 'MBBS', 'Specialization' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Thomas',
      experience: 26,
      gender: 'Female',
      FAQs: {
        'How is the condition diagnosed?': 'Diagnosis is typically done through...',
        'What are common symptoms?': 'Common symptoms include...'
      },
      specialization: 'Dermatologist',
      education: [ 'MBBS', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Maybe Johnson',
      experience: 7,
      gender: 'Female',
      FAQs: {
        'How is the condition diagnosed?': 'Diagnosis is typically done through...',
        'What are the treatment options?': 'Treatment options involve...'
      },
      specialization: 'Gastroenterologist',
      education: [ 'MBBS', 'Specialization' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Johnson',
      experience: 23,
      gender: 'Male',
      FAQs: {
        'How is the condition diagnosed?': 'Diagnosis is typically done through...'
      },
      specialization: 'Endocrinologist',
      education: [ 'MBBS', 'MS' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Williams',
      experience: 32,
      gender: 'Male',
      FAQs: { 'What are common symptoms?': 'Common symptoms include...' },
      specialization: 'Pediatrician',
      education: [ 'MBBS', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.'
    },
    {
      name: 'Dr. Brown',
      experience: 35,
      gender: 'Female',
      FAQs: {
        'How is the condition diagnosed?': 'Diagnosis is typically done through...'
      },
      specialization: 'Dermatologist',
      education: [ 'DO', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Hafiz Martinez',
      experience: 26,
      gender: 'Male',
      FAQs: {
        'What are the treatment options?': 'Treatment options involve...',
        'What are common symptoms?': 'Common symptoms include...'
      },
      specialization: 'Orthopedic Surgeon',
      education: [ 'MBBS', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    },
    {
      name: 'Dr. Not Johnson',
      experience: 21,
      gender: 'Male',
      FAQs: {
        'What are the treatment options?': 'Treatment options involve...'
      },
      specialization: 'Cardiologist',
      education: [ 'MBBS', 'MD' ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.',
      fees:500
    }
  ]
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard doctors={doctors}/>}/>
        <Route path="/dashboard/:doctorName" element={<DoctorDetails doctors={doctors}/>}/>
          
      </Routes>
    </div>
  )
}