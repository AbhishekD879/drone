import React from 'react'
import { Link } from 'react-router-dom'
const NavElement=({children,path})=>{
    return(
        <div className='px-5 py-2 text-white font-semibold bg-black rounded ml-4 transition-all hover:text-[violet]  hover:scale-110 hover:bg-[yellow]'>
            <Link to={path}>
            {children}
            </Link>
        </div>
    )
}

const Navbar = () => {
  const nav=[
    {
        name:"HOME",
        path:"/"
    },
    {
        name:"ABOUT",
        path:"/about"
    },
    {
        name:"CONTACT",
        path:"/contact"
    },
    {
        name:"PROFILE",
        path:"/profile"
    }
    
  ]  
  return (
    <div className='flex items-center'>
        <div className='w-full flex items-center'>
            {nav.map(({name,path})=>
            (<NavElement key={name} path={path}>
                {name}
            </NavElement>))}
        </div>
    </div>
  )
}

export default Navbar