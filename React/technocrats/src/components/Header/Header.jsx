import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 sticky top-0 w-full shadow-md z-10 bg-white '>
        <Logo/> 
        <Nav/>
    </div>
  )
}

export default Header