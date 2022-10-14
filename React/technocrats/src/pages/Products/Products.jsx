import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductGridCard from '../../components/ProductCard/ProductGridCard';
import {addProductWithSales,getTop5Products} from "./../../redux/actions/index"
const Products = () => {
  const dispatch=useDispatch();
  const {products,top5Products}=useSelector((state)=>state.DataReducer);  
  useEffect(()=>{
    const fetchData=async()=>{
        const data=await (await fetch("https://fakestoreapi.com/products")).json();
        dispatch(addProductWithSales(data))
        dispatch(getTop5Products())
    }
    fetchData();
  },[])
  
  return (
    <div>
        <div  className='flex flex-col justify-center px-12'>
        <h1  className='text-5xl text-gray-900'>Top 5 Products</h1>   
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {top5Products&&top5Products.map((product)=>(<ProductGridCard key={product.id} {...product}/>))}
        </section>
        </div>
        <hr className='font-bold h-4'/>
        <div className='flex flex-col justify-center p-8'>
         <h1 className='text-5xl text-gray-900' >All Products</h1>   
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products&&products.map((product)=>(<ProductGridCard key={product.id} {...product}/>))}
        </section>
        </div>
    </div>
  )
}

export default Products