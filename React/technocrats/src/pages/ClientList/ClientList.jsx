import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getClients} from "./../../redux/actions/index"
import Row from './Row';
const ClientList = () => {
    const dispatch=useDispatch();
    const {clientList}= useSelector((state)=>state.DataReducer)
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
            dispatch(getClients(data))
        }
        fetchData();
      },[dispatch])
  return (
    <div>
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                First
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Last
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Username
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {clientList&&clientList.map(client=>(<Row key={client.id} {...client} />))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ClientList