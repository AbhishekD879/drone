import React from 'react'
import logo from "./../../../assets/headerAsset/DroneLogo.svg"
const WhatDoWeDo = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen flex-col relative'>
        <h1 className='font-bold text-5xl'>What do <span className='text-[#13B8DC]'>we</span> do?</h1>
        <p className='font-semibold text-2xl text-center mt-5 w-1/2'> Drone Dynamics is a popular business based out of Delhi and is known for its work on Drone 
technology which retreats ceremonies in different parts of India.  </p>
<img data-aos="fade-up" className='inline-block absolute right-24 top-32'  src={logo} alt='ast' />
<img data-aos="fade-up" className='inline-block absolute bottom-32 left-24' src={logo} alt='ast' />
    </div>
  )
}

export default WhatDoWeDo