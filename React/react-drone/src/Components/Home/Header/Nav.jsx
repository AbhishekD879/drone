import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <ul className="nav flex items-center">
    <li><Link to='/' className="mr-8 font-semibold text-xl hover:scale-105">HOME</Link></li>
    <li><Link to='/about' className="mr-8 font-semibold text-xl hover:scale-105">IMAGES</Link></li>
    <li><Link to='/dashboard' className="mr-8 font-semibold text-xl hover:scale-105">DASHBOARD</Link></li>
    <li><Link to='/contact' className="mr-8 font-semibold text-xl hover:scale-105">CONTACT</Link></li>
    <li>
    <Link to="/login">
    <div className='rounded-full flex items-center justify-center border border-[lightgrey] w-10 h-10 cursor-pointer mr-4'>
        <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="avatar" className="w-full h-full text-center rounded-full"/>
    </div>
    </Link>
    </li>
    </ul>
  )
}

export default Nav