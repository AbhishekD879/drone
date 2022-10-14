import React from 'react'

const FacebookFooter = () => {
  return (
    <div className='flex bg-[#1c2b33] justify-between text-white p-4 w-full'>
        <div>© 2022 Meta</div>
        <div className='flex justify-between items-center px-2 '>
            <div className='px-2 cursor-pointer'>About</div>
            <div className='px-2 cursor-pointer'>Developer</div>
            <div className='px-2 cursor-pointer'>Careers</div>
            <div className='px-2 cursor-pointer'>Privacy</div>
            <div className='px-2 cursor-pointer'>Cookies</div>
            <div className='px-2 cursor-pointer'>Terms</div>
            <div className='px-2 cursor-pointer'>Help Center</div>
        </div>
    </div>
  )
}

export default FacebookFooter