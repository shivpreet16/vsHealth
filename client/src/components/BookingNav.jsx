import React from 'react'
import {Avatar, Typography} from '@mui/material';
import { deepOrange } from '@mui/material/colors';


const BookingNav = ({name}) => {
    const nameSplit=name.split(" ")
    const initials= nameSplit[1][0] + (nameSplit.length==2?" ":nameSplit[nameSplit.length-1][0])
  return (
    <div className='w-screen h-16 shadow-md lg:shadow-lg flex relative items-center justify-between px-10'>
        <Avatar sx={{ bgcolor: deepOrange[500] }}> {initials}</Avatar>
        <Typography className="text-blue-600">Help?</Typography>
    </div>
  )
}

export default BookingNav