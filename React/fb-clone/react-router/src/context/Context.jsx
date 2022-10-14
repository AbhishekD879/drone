import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const LoginContext= createContext()
const Context = ({children}) => {
  const [store,setStore]=useState({
    login:false
  })
  useEffect(()=>{
    if(localStorage.getItem('login')==="true")setStore({login:true})
  },[store])  
  return (
    <div>
        <LoginContext.Provider value={{
            store,
            setStore,
        }}>
        {children}
        </LoginContext.Provider>
    </div>
  )
}

export default Context