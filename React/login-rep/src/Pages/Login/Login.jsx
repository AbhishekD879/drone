import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const [islogged,setIsLogged]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem('login')==="true"){
            setIsLogged(true)
        }else{
            setIsLogged(false)
        }
    },[])
    const handelLogin=()=>{
        if(!islogged){
            localStorage.setItem("login",true)
            setIsLogged(true)
            navigate('/home')
        }
    }
    const handelLogout=()=>{
        if(islogged){
            localStorage.setItem("login",false)
            setIsLogged(false)
            navigate('/login')
        }
    }
  return (
    <div>
        {islogged?<button onClick={handelLogout}>Logout</button>:<button onClick={handelLogin}>Login</button>}
        
    </div>
  )
}

export default Login