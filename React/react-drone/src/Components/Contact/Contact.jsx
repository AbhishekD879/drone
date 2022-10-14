import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col h-3/4 mt-32">
      <h1 className='uppercase text-lg text-gray-600 font-bold'>Contact Form</h1>  
     <div className='w-1/2'>
        <div>
      <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
      <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mt-8">
      <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Send Message
      </button>
    </div>
    </div>
  </div>
  )
}

export default Contact