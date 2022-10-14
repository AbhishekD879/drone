import React, { useEffect} from 'react'

import {useSelector,useDispatch} from "react-redux"
import {getRevenue} from "./../../redux/actions/index"
import BarChart from './BarChart'
const Revenue = () => {
  const dispatch=useDispatch()
  const {products}=useSelector(state=>state.DataReducer)
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
            data:products.map(product=>Math.round(product.price*product.sales)),
            label:"Revenue",
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
      dispatch(getRevenue(data))
  },[products,dispatch])
  return (
    <div className='flex flex-col w-screen justify-center items-center h-screen'>
        <div className='chart w-1/2 h-1/2 '>
            <BarChart/>
        </div>
        <div className='values flex justify-between  w-1/2 h-1/2 mt-32 '>
          <div className="text-xl text-gray-600 cursor-auto ml-2" >
            <h2 >Total Revenue</h2>
            ${Math.round(products.reduce((acc,product)=>acc+=product.price*product.sales,0))}
          </div>
          <div className="text-xl text-gray-600 cursor-auto ml-2">
            <h2>Total Spent</h2>
            ${Math.round(products.reduce((acc,product)=>acc+=product.price*product.rating.count,0))}
          </div>
        </div>
    </div>
  )
}

export default Revenue