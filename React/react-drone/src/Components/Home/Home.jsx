import React from 'react'
import Evolution from './Evolution/Evolution'

import VideoAsset from './VideoAsset/VideoAsset'
import WhatDoWeDo from './WhatDoWeDo/WhatDoWeDo'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <WhatDoWeDo/>
        <Evolution/>
        <VideoAsset/>
    </div>
  )
}

export default Home