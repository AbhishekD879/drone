import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import Chart from 'chart.js/auto';
const BarChart = ({data}) => {
    
  return (
    <div>
        {data&&<Bar data={data} />}
    </div>
  )
}

export default BarChart