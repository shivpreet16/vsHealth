import React from 'react';
import { Typography } from "@mui/material";
import BookButton from './BookButton';
import doctorPrescription from '../assets/doctor_prescription.jpg';

const AboutDoctor = ({id, doctorName, about}) => {
  return (
    <div className='min-h-screen mt-20 md:px-20 px-10 flex flex-col md:flex-row items-center gap-5 md:gap-0 md:justify-between'>
        <div className='flex flex-col gap-5 px-10'>
            <Typography variant='h4' sx={{fontWeight:"bold"}}>About Me</Typography>
            <Typography>{about}</Typography>
            <BookButton id={id}/>
        </div>
        <img src={doctorPrescription} alt="about-doctor" />
    </div>
  )
}

export default AboutDoctor