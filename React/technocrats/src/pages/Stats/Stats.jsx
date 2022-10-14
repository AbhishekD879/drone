import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import BarChart from './BarChart'
const Stats = () => {
  const {products}=useSelector(state=>state.DataReducer)
  const [stat,setStats]=useState()
  // const [chartdata,setData]=useState({
  //   lables:[],
  //   datasets:[
  //     {
  //       data:[],
  //       lable:"Revenue"
  //     }
  //   ]
  // })
  useEffect(()=>{
      
      const data={
        labels:products.map(product=>(product.title.substring(0,11))),
        datasets:[
          {
            data:products.map(product=>Math.round(product.sales)),
            label:"Sales",
             backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }
        ]
      }
      setStats(data)
  },[products])
  return (
    <div className='flex flex-col justify-center items-center p-8'>
        <div className='chart w-full h-full'>
            <BarChart data={stat} />
        </div>
        
    </div>
  )
  
}

export default Stats