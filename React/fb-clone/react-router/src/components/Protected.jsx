import { useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {LoginContext} from './../context/Context'
const Proctected = ({children}) => {
const {store}=useContext(LoginContext)

const navigate=useNavigate(LoginContext)
   useEffect(()=>{
    if(!store.login){
       navigate('/login')
    }
   },[navigate,store.login]) 

  
   return (
    <>
        {children}
    </>
  )
}

export default Proctected