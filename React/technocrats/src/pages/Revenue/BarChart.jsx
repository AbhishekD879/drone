import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import Chart from 'chart.js/auto';
const BarChart = () => {
    const {revenue}=useSelector(state=>state.DataReducer)
    
  return (
    <div>
        {Object.keys(revenue).length!==0&&<Bar data={revenue} />}
    </div>
  )
}

export default BarChart