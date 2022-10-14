import React from 'react'
import FacebookSearch from './FacebookSearch'
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
import { LoginContext } from '../context/Context'
import { useContext } from 'react'
const FaceBookNav = () => {
    //className="hover:fill-[#0E8DF1]"
    const {store}=useContext(LoginContext)
    const navIcon=[
    {
        ioc:<MdHome color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1] active:fill-[#0E8DF1]" />,
        path:"/"
    },
    {
        ioc:<AiFillYoutube color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
        path:"/video"
    },
    {
        ioc:<AiOutlineShop color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
        path:"/market"
    },
    {
        ioc:<MdGroups color='#0E8DF1' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
        path:"/community"
    },
    {
        ioc:<IoGameController color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/>,
        path:"/fbgames"
    }
]

    const profileIcons=[<AiOutlinePlus size={"1.5em"}/>,<BsMessenger size={"1.5em"}/>,<IoMdNotifications size={"1.5em"}/>]

  return (
    <div className='flex justify-between w-full'>
        <div className='flex items-center'>
            <BsFacebook  color='#0E8DF1' size={"2rem"} className="mr-2 "/>
            <FacebookSearch/>
        </div>

        
       {store.login&&( <div className='flex items-center'>
            {navIcon.map(({ioc,path})=>(<FaceBookNavIcon key={path} path={path} ioc={ioc}/>))}
        </div>)}
        
        
        <div className='flex items-center justify-center'>
            {profileIcons.map((ioc,i)=>(<FaceBookProfileIcon key={i} ioc={ioc}/>))}
            <Avatar src={"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"}/>
        </div>
    </div>
  )
}

export default FaceBookNav