import React from 'react'

const VideoPlayer=({src})=>{
    return(<div className='flex items-center justify-center'>
      <iframe width="400" height="200" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>)
}


const Video = () => {
  const links=[
    "https://www.youtube.com/embed/MpdFj8MEuJA",
    "https://www.youtube.com/embed/ukecIFE6Now",
    "https://www.youtube.com/embed/tWVWeAqZ0WU",
    "https://www.youtube.com/embed/PMMc4VsIacU",
    "https://www.youtube.com/embed/6oDQaB2one8",
    "https://www.youtube.com/embed/sJ-c3BA-Ypo",
    "https://www.youtube.com/embed/fHPa5xzbpaA",
    "https://www.youtube.com/embed/wKBu_dEaF9E",
    "https://www.youtube.com/embed/gSdFqxnWBMM",
    "https://www.youtube.com/embed/V-kxBWcPJfo",
    "https://www.youtube.com/embed/PMMc4VsIacU",
    "https://www.youtube.com/embed/6oDQaB2one8",
  ]
  return (
    <div className='grid place-items-center w-full items-center h-full'>
        <div className='grid w-full p-12 overflow-y-scroll gap-2 grid-cols-3'>
            {links.map((link)=>(<VideoPlayer src={link}/>))}
        </div>
    </div>
  )
}

export default Video
