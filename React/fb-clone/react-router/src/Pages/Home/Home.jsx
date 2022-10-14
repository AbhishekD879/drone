import React, { useEffect, useState } from 'react'
import InputWithLable from '../../components/InputWithLable'
import {useNavigate} from 'react-router-dom'
import  "./Home.css"
import Card from './Card/Card'
import Aside from '../../components/Aside'
import AsideCircle from '../../components/AsideCircle'
const Home = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    (async()=>{
       const {data}= await (await (fetch("https://dummyapi.io/data/v1/post",{headers:new Headers({"app-id":"622713b5a7ab1d6d8a5a4655"})}))).json();
       setData(data)
    })()
  },[])

  return (
    <div className='flex justify-evenly items-start'
    >
     
      {/* <div className='py-4 mt-6'>
        <Aside data={data}/>
      </div> */}
      <div className='flex flex-col h-1/2 items-center justify-center py-4 overflow-y-scroll '>
      {data.map((post)=>(<Card data={post}/>))}
      </div>
      {/* <div className='py-4 mt-6'>
        {data.map((dt)=>(<AsideCircle data={data} />))}
      </div> */}
    </div>
  )
}
/**
<InputWithLable name={'firstName'} value={user.firstName} set={setName}/>
    <InputWithLable name={'lastName'} value={user.lastName} set={setName}/>
    <button onClick={handelNavigation} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go To Profile</button>
*/
export default Home