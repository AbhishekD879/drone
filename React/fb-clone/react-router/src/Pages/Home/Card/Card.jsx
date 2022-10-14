import React from 'react'
import Avatar from '../../../components/Avatar'
import {MdMoreHoriz} from "react-icons/md"
import {AiTwotoneLike} from 'react-icons/ai'
import {FaCommentAlt} from 'react-icons/fa'
import {IoMdShareAlt} from 'react-icons/io'
const Card = ({data}) => {
    console.log(data)
  return (
    <div className='flex flex-col rounded shadow-md mt-4 border border-[grey]'>
            <div className='flex  justify-between px-2 items-center border-[lightgrey] py-2  border-b'>
                <div className='flex items-center justify-center'>
                    <Avatar src={data.owner?.picture}/>
                    <div className='ml-4'>
                        <h1 className='text-xl font-semibold'>{data.owner?.firstName}</h1>
                        <p>yesterDay 21.05pm</p>
                    </div>
                </div>
                <div>
                    <MdMoreHoriz size={"1.5em"}/>
                </div>
            </div>

            <div style={{width:"584px" ,}} className="overflow-hidden object-contain">
                <img src={data.image}  className="object-contain"/>
            </div>

            <div className='border-t border-[lightgrey] '>
                <div className='flex justify-between items-center p-2'>
                    <h1 className='text-lg font-semibold'>Likes {data.likes}</h1>
                    <div className='flex items-center'>
                        <p className='text-lg font-semibold'>11k comments </p>
                        <p className='ml-2 text-lg font-semibold'>95 share</p>
                    </div>
                </div>
                <hr/>
                <div className='flex justify-between p-2 items-center'>
                    <div className='flex items-center'>
                            <AiTwotoneLike color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/><span className='ml-2 inline-block text-lg text-[#B4B6B9]'>Like</span>
                    </div>
                    <div className='flex items-center'>
                            <FaCommentAlt color='#B4B6B9' size={"1.7em"} className="hover:fill-[#0E8DF1]"/><span className='ml-2 inline-block text-lg text-[#B4B6B9]'>Comments</span>
                    </div>
                    <div className='flex items-center'>
                            <IoMdShareAlt color='#B4B6B9' size={"2em"} className="hover:fill-[#0E8DF1]"/><span className='ml-2 inline-block text-lg text-[#B4B6B9]'>Share</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card