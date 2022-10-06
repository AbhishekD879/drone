import React from 'react'
import Button from '../Button/Button'

const ButtonContainer = ({setExpression}) => {
    const buttons=[1,2,3,4,5,6,7,8,9,0,'/','*','+','-','^']
  return (
    <div className='h-3/4 w-full rounded grid place-items-center grid-cols-3 p-4'>
        <div onClick={()=>setExpression("")} className='rounded-full cursor-pointer text-xl flex justify-center items-center w-12 h-12 p-4 text-white bg-orange-400'>
        AC
        </div>
        {buttons.map((btn)=>(<Button setExpression={setExpression} key={btn}>{btn}</Button>))}
        <div onClick={()=>setExpression((pre)=>eval(pre))} className='rounded-full cursor-pointer text-xl flex justify-center items-center w-12 h-12 p-4 text-white bg-orange-400'>
        =
        </div>
    </div>
  )
}

export default ButtonContainer