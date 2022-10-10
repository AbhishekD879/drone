import React,{useState,useEffect}  from 'react'

import UserChart from './UserChart'

import  {Bar,Bubble,Line,Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
const Dashboard = () => {
        const [userData,setuserData]=useState({
        lables:[],
        datasets:[
            {
                lable:"",
                data:[]
            }
        ]
      })  
      useEffect(()=>{
        (async()=>{
           let {users}= await (await fetch("https://dummyjson.com/users")).json()
           setuserData({
            labels: users.map((data) => data.age),
            datasets: [
              {
                label: "Height",
                data: users.map((data) => data.height),
                backgroundColor: [
                  "#6F38C5",
                  "87A2FB",
                  "ADDDD0",
                  "#EEEEEE",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 1,
                
              },
            ],
           })
        })()
      },[])
  return (
    <div>
        <div>
        <div className='flex gap-4 items-center'>
        <UserChart comp={<Bar data={userData}/>}/>
        <UserChart comp={<Bubble text={"All the collaborators"} data={userData} />}/>
        </div>
        <div className='flex gap-4 items-center'>
        <UserChart comp={<Line data={userData} />}/>
        <UserChart comp={<Pie data={userData}/>} />
        </div>
        </div>
    </div>
  )
}

export default Dashboard