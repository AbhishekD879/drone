import React from 'react'
import {useParams} from 'react-router-dom'
const Profile = () => {
  const {firstName,lastName}=useParams()  
  return (
    <div className='flex h-screen items-center justify-center'
    >{`Hi ${firstName} ${lastName}`}</div>
  )
}

export default Profile