import React from 'react'

const VideoAsset = () => {
    return (
        <section id="about" className="flex justify-center items-center px-10 mt-28 h-screen">
        <div data-aos="fade-up">
        <div className='border-2 border-[#13B8DC] relative w-full h-full'>
        <iframe className="relative -left-4 -top-4" width="560" height="315" src="https://www.youtube.com/embed/8_OVQfo63Rw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        </div>
        <div className="ml-10 w-2/5 flex flex-col justify-between">
            <div>
            <h1 className='font-bold text-5xl inline-block w-fit '>Recent<span className='text-[#13B8DC]'>Events</span></h1>
            </div>
            <div>
                <p className='font-semibold text-2xl  mt-5 break-words'>
                Far far away, behind the word mountains,far from the countries 
                Vokalia and Consonantia,there live the blind texts.Separated 
                they live in Bookmarksgrove right at the coast of the Semantics, 
                a large language ocean.
                </p>
            </div>
        </div>
       
     </section>
      )
}

export default VideoAsset

