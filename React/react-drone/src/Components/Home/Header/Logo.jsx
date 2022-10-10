import React from 'react'
import logo from "./../../../assets/headerAsset/DroneLogo.svg"
const Logo = () => {
  return (
    <div className='flex items-center'>
         <img style={{width:"100px",height:"100px"}} src={logo} alt="logo"/>
         <h1 className='font-semibold text-xl'><span className='text-[#13B8DC]'>Drone</span>Dynamics</h1>   
    </div>
  )
}

export default Logo