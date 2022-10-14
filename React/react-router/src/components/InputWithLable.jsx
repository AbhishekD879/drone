import React from 'react'

const InputWithLable = ({name,set,value}) => {
  return (
    <div className='flex flex-col mt-4'>
        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={name}>{name.toUpperCase()}</label>
        <input onChange={({target})=>set((pre)=>{
            return {
                ...pre,
                [target.name]:[target.value.trim()]
            }
        })} 
        className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' name={name} value={value} type='text' />
    </div>
  )
}

export default InputWithLable