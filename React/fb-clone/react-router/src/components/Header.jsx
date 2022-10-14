import React from 'react'
import FaceBookNav from './FaceBookNav'
import Navbar from './Navbar'
import { LoginContext } from '../context/Context'
import { useContext } from 'react'
const Header = () => {
  const {store}=useContext(LoginContext)
  return (
    <div className='flex items-center justify-between shadow p-2 sticky'>
        {/* <div className='flex-1 font-semibold text-4xl '>LO<span className='text-indigo-500'>GO</span></div>
        <Navbar/> */}
      {store.login&&(<FaceBookNav/>)}
    </div>
  )
}

export default Header