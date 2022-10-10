import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex justify-between items-center  fixed top-0 w-full shadow-md z-10 bg-white '>
        <Logo/> 
        <Nav/>
    </div>
  )
}

export default Header