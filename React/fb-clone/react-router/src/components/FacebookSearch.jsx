import React from 'react'
import {MdSearch} from "react-icons/md"
const FacebookSearch = () => {
  return (
    <div>
        <div className='flex items-center bg-[#F0F2F5] px-4 py-2 rounded-3xl'>
        <MdSearch color='#B4B6B9' size={"1.5em"} className=''/>
        <input placeholder='Search Facebook' className='bg-[#F0F2F5] focus:outline-none'  type="search"  />   
        </div>
    </div>
  )
}

export default FacebookSearch