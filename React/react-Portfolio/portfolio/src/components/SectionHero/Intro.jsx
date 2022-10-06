import React from 'react'
import github from "./akar-icons_instagram-fill.svg"
import fb from "./bx_bxl-facebook.svg"
import insta from "./akar-icons_github-fill.svg"
const Intro = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center item-center">
            <h1 className="text-center font-semibold text-4xl text-white mb-7">I’m Abhishek Diwate</h1>
            <p className="font-semibold text-center text-xl text-white mb-6">Front-End Development - UI/UX Designer</p>
            <div className="flex justify-center item-center ">
                <img className="hov-ioc mr-4 cursor-pointer" src={github} alt="insta" />
                <img className="hov-ioc mr-4 cursor-pointer" src={fb} alt="fb" />
                <img className="hov-ioc mr-4 cursor-pointer" src={insta} alt="insta" />
            </div>
     </div>
  )
}

export default Intro