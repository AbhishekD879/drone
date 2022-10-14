import React, { useEffect } from 'react'
import User from './User'
import {useSelector,useDispatch} from "react-redux"
import {userDataAction} from "./../../redux/actions/index"
const DashBoard = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    (async()=>{
      const data=await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
      console.log(data)
      dispatch(userDataAction({data}))
    }
    )()
  },[])
  const userdata=useSelector((state)=>state.userReducer);
  return (
    <div className='flex flex-col justify-center mt-32 gap-3 w-full h-screen p-4'>
      <div className='top flex gap-4 w-full h-1/2'>
        <div className='w-1/2 p-2 shadow-md rounded bg-red-300'><User data={userdata}/></div>
        <div className='w-1/2 p-2 shadow-md rounded bg-blue-300'>collaborators</div>
      </div>
      <div className='bottom flex gap-4 w-full h-1/2'>
      <div className='w-1/2 p-2 shadow-md rounded bg-yellow-300'>Active Projects</div>
        <div className='w-1/2 p-2 shadow-md rounded bg-green-300'>Totals Deals</div>
      </div>
    </div>
  )
}

export default DashBoard