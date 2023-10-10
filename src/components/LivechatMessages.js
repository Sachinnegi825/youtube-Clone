import React from 'react'
import Img1 from "../Assests/p.jpg"

const LivechatMessages = ({name,message}) => {
  return (
    <div className=' my-2'>
        <div className='flex flex-row'>
            <img src={Img1} alt="" className='h-6 rounded-full'/>
            <span className='ml-2 text-gray-500'>{name}</span>
            <p className='ml-4'>{message}</p>
        </div>
    </div>
  )
}

export default LivechatMessages