import React from 'react'

const Button = ({children,setExpression}) => {
  return (
    <div onClick={(e)=>{setExpression((pre)=>pre+=e.target.innerText)}} className='rounded-full cursor-pointer text-xl flex justify-center items-center w-12 h-12 p-4 text-white bg-orange-400'>
        {children}
    </div>
  )
}

export default Button