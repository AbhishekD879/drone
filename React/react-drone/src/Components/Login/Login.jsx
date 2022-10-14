import React,{useContext} from 'react'
import { LoginContext } from './../../context/Context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate() 
    console.log(LoginContext) 
    const {store,setStore}=useContext(LoginContext)
  
    const handelLogin=()=>{
          if(!store.login){
              setStore((pre)=>{
                  return{
                      ...pre,login:true
                  }
              })
              navigate('/')
  
          }
    }
    const handelLogout=()=>{
      if(store.login){
          setStore((pre)=>{
              return{
                  ...pre,login:false
              }
          })
          navigate('/login')
      }
    }    
  return (
    <div className='flex h-screen justify-center items-center'>
     {store.login?
     (
        <div className="flex justify-center items-center flex-col h-3/4 mt-32">
        <h1 className='uppercase text-lg text-gray-600 font-bold'>Login</h1>  
        <div className="mt-8">
      <button onClick={handelLogout} className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Logout
      </button>
    </div>
      </div>
    
    ):
    (
  
    <div className="flex justify-center items-center flex-col h-3/4 mt-32 w-full">
    <h1 className='uppercase text-lg text-gray-600 font-bold'>Login</h1>  
   <div className='w-1/2'>
      <div>
    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
  </div>
  <div className="mt-8">
    <span className="uppercase text-sm text-gray-600 font-bold">Password</span>
    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
  </div>
  <div className="mt-8">
      <button onClick={handelLogin} className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Login
      </button>
    </div>
  </div>
    </div>
   
    )}
    </div>
  )
}

export default Login


