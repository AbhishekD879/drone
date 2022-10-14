import React from 'react'
import FacebookSearch from './FacebookSearch'
import Logo from "./fb.svg"
import {BsFacebook} from "react-icons/bs"
import {MdHome} from 'react-icons/md'
import {AiOutlineShop,AiFillYoutube} from 'react-icons/ai'
import {MdGroups} from 'react-icons/md'
import {IoGameController} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import FaceBookNavIcon from './FaceBookNavIcon'
import FaceBookProfileIcon from './FaceBookProfileIcon'
import Avatar from './Avatar'
const FaceBookNav = () => {
    //className="hover:fill-[#0E8DF1]"
  
    const navIcon=[
    <MdHome color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]" />,
    <AiFillYoutube color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
    <AiOutlineShop color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
    <MdGroups color='#0E8DF1' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
    <IoGameController color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>]

    const profileIcons=[<AiOutlinePlus size={"1.5em"}/>,<BsMessenger size={"1.5em"}/>,<IoMdNotifications size={"1.5em"}/>]

  return (
    <div className='flex justify-between w-full'>
        <div className='flex items-center'>
            <BsFacebook  color='#0E8DF1' size={"2rem"} className="mr-2 "/>
            <FacebookSearch/>
        </div>

        
        <div className='flex items-center'>
            {navIcon.map(ioc=>(<FaceBookNavIcon ioc={ioc}/>))}
        </div>
        
        
        <div className='flex items-center justify-center'>
            {profileIcons.map(ioc=>(<FaceBookProfileIcon ioc={ioc}/>))}
            <Avatar src={"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"}/>
        </div>
    </div>
  )
}

export default FaceBookNav