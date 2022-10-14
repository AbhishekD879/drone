import React, { useEffect, useState } from 'react'
// requires a loader

import ImageGallery from 'react-image-gallery';
const About = () => {
  const [photos,setPhotos]=useState([]);
  
  useEffect(()=>{
    (async()=>{
      let {results}=await (await fetch(`https://api.unsplash.com/search/photos?page=${Math.floor(Math.random()*10)}&query=drone&h=200&w=200&client_id=USH3MEa-iG7YTelgxJSN3VuhTzig51QLlvarqAet0VM`)).json()
      results=results.map(({urls
      })=>{
        return {
          original: urls.regular,
          thumbnail: urls.thumb          ,
        }
      })
      setPhotos(results)
    })()
  },[])
  
  return (
    <div className='flex justify-center items-center mt-32'>
      <div className='w-1/2 h-1/2' >
      
      <ImageGallery items={photos} />
      </div>
    </div>
  )
}

export default About