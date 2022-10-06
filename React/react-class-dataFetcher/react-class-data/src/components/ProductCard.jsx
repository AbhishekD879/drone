import React from 'react'

const ProductCard = ({title,description,price,thumbnail}) => {
  return (
    <div className='flex flex-col shadow rounded p-2'>
        <img className='h-60' src={thumbnail} alt={title} />
        <h3 className='font-bold'>{title}</h3>
        <p className='text[grey]'>{description}</p>
        <h4 className='text-green-500 font-semibold'>{price}$</h4>
    </div>
  )
}

export default ProductCard