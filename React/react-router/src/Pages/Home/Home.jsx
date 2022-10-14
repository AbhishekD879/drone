import React, { useState } from 'react'
import InputWithLable from '../../components/InputWithLable'
import {useNavigate} from 'react-router-dom'
import  "./Home.css"
const Home = () => {
  const [user,setName]=useState({
    firstName:"",
    lastName:""
  })

  const navigate=useNavigate()
  const handelNavigation=()=>{
    navigate(`/profile/${user.firstName}/${user.lastName}`)
  }
  return (
    <div className='flex flex-col h-screen items-center justify-center'
    >Home Page
    <InputWithLable name={'firstName'} value={user.firstName} set={setName}/>
    <InputWithLable name={'lastName'} value={user.lastName} set={setName}/>
    <button onClick={handelNavigation} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go To Profile</button>
    </div>
  )
}

export default Home