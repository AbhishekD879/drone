import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {LoginContext} from "./../../context/Context"
const Protected = ({children}) => {
    const {store}=useContext(LoginContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if(!store.login){
            navigate('/login')
        }
    },[])
  return (
    <>
    {children}
    </>
  )
}

export default Protected