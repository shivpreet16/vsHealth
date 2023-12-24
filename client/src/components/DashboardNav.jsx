import React from 'react'

const DashboardNav = () => {
  return (
    <div className='w-screen h-16 shadow-md lg:shadow-lg flex relative items-center justify-between px-10'>
        <h1 className='font-bold text-xl'>vsHealth</h1>
        <div className='cursor-pointer'>Log Out</div>
    </div>
  )
}

export default DashboardNav