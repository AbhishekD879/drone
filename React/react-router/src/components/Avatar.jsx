import React from 'react'

const Avatar = ({src}) => {
  return (
    <div className='rounded-full w-10 h-10 cursor-pointer ml-4'>
        <img src={src} className="w-full h-full text-center rounded-full"/>
    </div>
  )
}

export default Avatar