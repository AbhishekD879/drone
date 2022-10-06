import React from 'react'
import AboutAsset from './AboutAsset'

const About = ({Asset,isLeft}) => {
  return (
    <section id="about" className="flex justify-center items-center px-10 mt-28">
    <div data-aos="fade-up">
       {!isLeft&&(<AboutAsset>
        {Asset}
       </AboutAsset>)}
    </div>
    <div className="ml-10 w-2/5 flex flex-col justify-between">
        <div>
            <h2 className="purple text-2xl font-semibold">ABOUT</h2>
        </div>
        <div>
            <h3 className="font-semibold text-xl text-white mb-6">Front-End Development - UI/UX Designer</h3>
            <p className="break-words text-white">
            Far far away, behind the word mountains,far from the countries 
            Vokalia and Consonantia,there live the blind texts.Separated 
            they live in Bookmarksgrove right at the coast of the Semantics, 
            a large language ocean.
            </p>
        </div>
    </div>
    <div data-aos="fade-up">
       {isLeft&&(<AboutAsset>
        {Asset}
       </AboutAsset>)}
    </div>
 </section>
  )
}

export default About