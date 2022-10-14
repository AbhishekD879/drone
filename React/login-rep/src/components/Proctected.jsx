import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
const Proctected = ({children}) => {
    const navigate=useNavigate()
   useEffect(()=>{
    const login=localStorage.getItem('login');
    console.log(login)
    if(login==="false" || !login){
        console.log("navigate",login)
        navigate('/login')
    }
   },[navigate]) 

  
   return (
    <div>
        {children}
    </div>
  )
}

export default Proctected