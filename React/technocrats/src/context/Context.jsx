import React, {useState } from 'react'
import { createContext } from 'react'
export const LoginContext= createContext()
const Context = ({children}) => {
  const [store,setStore]=useState({
    login:false
  })
    
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