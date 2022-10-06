import React from 'react'
import SmallCard from './SmallCard'

const WhatIDo = ({frontEnd,backEnd}) => {
  return (
    <section id="what_i_do" className="flex flex-col justify-center  items-center px-10 mt-28">
    <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="purple text-2xl font-semibold mb-2">WHAT I DO</h2>
        <h1 className="text-4xl font-semibold text-white">SPECIALIZING IN</h1>
    </div>
    <div className="flex text-white">
        <SmallCard {...frontEnd}/>
        <SmallCard {...backEnd}/>
    </div>
</section>
  )
}

export default WhatIDo