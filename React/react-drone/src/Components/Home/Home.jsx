import React from 'react'
import Evolution from './Evolution/Evolution'
import Header from './Header/Header'
import VideoAsset from './VideoAsset/VideoAsset'
import WhatDoWeDo from './WhatDoWeDo/WhatDoWeDo'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Header/>
        <WhatDoWeDo/>
        <Evolution/>
        <VideoAsset/>
    </div>
  )
}

export default Home