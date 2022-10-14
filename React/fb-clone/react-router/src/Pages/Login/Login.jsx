import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  console.log(LoginContext)
  const navigate=useNavigate()  
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
    <div className='flex h-screen flex-col justify-center items-center'>
     {store.login?
     (
     <button onClick={handelLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Logout
    </button>
    ):
    (
    <>
    <h1 className='text-2xl font-bold'>Welcome to Facebook</h1>
    <h1 className='text-2xl font-bold mb-2'>Please Login</h1>
    <button onClick={handelLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Login
    </button>
    </>
    )}
    </div>
  )
}

export default Login