import React, { useState } from 'react'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import Screen from '../Screen/Screen'

const Container = () => {
    const [expression,setExpression]=useState("")
  return (
    <div className='flex flex-col items-center justify-center rounded bg-black w-1/5 h-3/4'>
        <Screen expression={expression} />
        <ButtonContainer setExpression={setExpression}/>
    </div>
  )
}

export default Container