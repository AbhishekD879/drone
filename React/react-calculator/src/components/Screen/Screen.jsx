import React from 'react'

const Screen = ({expression}) => {
  return (
    <div className='h-1/4 w-full rounded font-bold text-white flex flex-col justify-end p-4 items-end border-b border-cyan-50'>{expression?expression:"Output"}</div>
  )
}

export default Screen