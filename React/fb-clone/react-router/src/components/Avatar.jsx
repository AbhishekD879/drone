import React from 'react'
import {Link} from "react-router-dom"
const Avatar = ({src}) => {
  return (
    <Link to="/login">
    <div className='rounded-full flex items-center justify-center border border-[lightgrey] w-10 h-10 cursor-pointer ml-4 '>
        <img src={src} alt="avatar" className="w-full h-full text-center rounded-full"/>
    </div>
    </Link>
  )
}

export default Avatar