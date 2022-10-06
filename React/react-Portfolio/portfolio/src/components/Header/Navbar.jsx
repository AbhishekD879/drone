import React from 'react'

const Navbar = () => {
  return (
    <ul className="nav flex">
    <li><a className="mr-8 font-semibold text-2xl text-white" href="#about">ABOUT</a></li>
    <li><a className="mr-8 font-semibold text-2xl text-white" href="#what_i_do">WHAT I DO</a></li>
    <li><a className="mr-8 font-semibold text-2xl text-white" href="#project">WORK</a></li>
    <li><a className="mr-8 font-semibold text-2xl text-white" href="#contact">CONTACT</a></li>
    </ul>
  )
}

export default Navbar