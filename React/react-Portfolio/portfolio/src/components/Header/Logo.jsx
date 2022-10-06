import React from 'react'
import logo from "./logo.svg"
const Logo = () => {
  return (
    <div className="flex flex-1 items-center ">
            <img src={logo} alt="logo" />
            <h3 className="ml-4 font-semibold text-2xl text-white">Abhishek</h3>
    </div>
  )
}

export default Logo