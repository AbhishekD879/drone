import React from 'react'

import {Chart as ChartJS} from 'chart.js/auto'
const UserChart = ({comp,text}) => {
  

  return (
   <div className='h-full w-full items-center p-10'>
     <div>{comp}</div>
     <h1>{text}</h1>
   </div>

  )
}

export default UserChart