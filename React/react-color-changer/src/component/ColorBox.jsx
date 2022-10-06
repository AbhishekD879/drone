import React from 'react'

const ColorBox = ({color,onClick:setColor}) => {
  return (
    <div onClick={()=>setColor(color)} style={{backgroundColor:color}} className={`h-10 w-36 rounded bg-[${color}] ml-4`}>

    </div>
  )
}

export default ColorBox