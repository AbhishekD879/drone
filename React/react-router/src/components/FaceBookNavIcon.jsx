import React from 'react'
import {FiHome,FiYoutube} from 'react-icons/fi'
import {AiOutlineShop} from 'react-icons/ai'
import {MdGroups} from 'react-icons/md'
// import {IoGameControllerOutline} from 'react-icons/io'
const FaceBookNavIcon = ({ioc}) => {
  return (
    <div  className='px-8 w-full flex items-center justify-center h-full rounded relative hover:bg-[lightgrey] cursor-pointer hover:fill-[#0E8DF1] before:w-1/2 before:absolute before:h-1 before:rounded before:hover:bg-[#0E8DF1] before:bottom-0 before:left-1/4 transition-all'>
       {ioc}
    </div>
  )
}

export default FaceBookNavIcon