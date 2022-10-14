import React from 'react'

const PageNotFound = () => {
  return (
    <div className='grid place-items-center items-center h-screen'>
        <div className='flex flex-col items-center'>
            <h1 className='text-9xl'><span className='text-[yellow]'>404</span> NOT FOUND</h1>
            <p>Opps the Page You Are Looking For Does Not Exist</p>
        </div>
    </div>
  )
}

export default PageNotFound