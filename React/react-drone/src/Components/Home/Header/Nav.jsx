import React from 'react'

const Nav = () => {
  return (
    <ul className="nav flex">
    <li><a className="mr-8 font-semibold text-xl hover:scale-105" href="#about">HOME</a></li>
    <li><a className="mr-8 font-semibold text-xl hover:scale-105" href="#what_i_do">ABOUT</a></li>
    <li><a className="mr-8 font-semibold text-xl hover:scale-105" href="#project">DASHBOARD</a></li>
    <li><a className="mr-8 font-semibold text-xl hover:scale-105" href="#contact">CONTACT</a></li>
    </ul>
  )
}

export default Nav