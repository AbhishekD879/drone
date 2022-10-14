import React from 'react'
import FaceBookNav from './FaceBookNav'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex items-center justify-between shadow p-2 sticky'>
        {/* <div className='flex-1 font-semibold text-4xl '>LO<span className='text-indigo-500'>GO</span></div>
        <Navbar/> */}
        <FaceBookNav/>
    </div>
  )
}

export default Header