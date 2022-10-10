import React from 'react'
import evol from "./../../../assets/headerAsset/evol.svg"
const Evolution = () => {
  return (
    <div className='flex relative justify-end items-start h-screen p-12'>
        <div className='flex flex-col justify-center items-center w-1/2 mt-20 '>
        <h1 className='font-bold text-5xl inline-block w-fit text-center'><span className='text-[#13B8DC]'>Evol</span>ution</h1>
        <p className='font-semibold text-2xl text-center mt-5'>
        Drones are becoming more and more popular as they are more practical, not just for military but also for civilians. They are made to fly, provide a view from the sky and also to perform a certain task. Not many people know that drones can also be used for entertainment and that's where light shows come in. Light shows are a type of entertainment that can be created with a drone. Light shows usually use a variety of colors and patterns to create a distinct visual that draws in attention. A company that specializes in these light shows is the Oceanic Lights Company
        </p>
        </div>
    <img className='absolute bottom-0 left-12' src={evol} alt="evol"/>
    </div>
  )
}

export default Evolution