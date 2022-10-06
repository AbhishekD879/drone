import React from 'react'

const SmallCard = ({title,ioc}) => {
  return (
    <div data-aos-duration="2000" data-aos="flip-left" className="flex flex-col p-10 px-20 bg-cards-what rounded opacity-80 ml-5">
            <div className="flex items-center mb-2">
                <img src={ioc}  alt='small'/>
                <div className="ml-2">{title}</div>
            </div>
            <p className="break-word">Lom ipsum dolo, sit amet consectetu 
                <br /> 
                adpisicing elit, rem voluptas sed blanditiis</p>
    </div>
  )
}

export default SmallCard