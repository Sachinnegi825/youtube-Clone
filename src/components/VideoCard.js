import React from 'react'

const VideoCard = ({snippet,statistics,contentDetails}) => {
  let time=contentDetails.duration.slice(2);
  if(!time.includes("M")){
     time="00:".concat(time);
  }
  time=time.replace("M",":");
  time=time.replace("H",":");
  time=time.replace("S","");

  return (
    <div className='cursor-pointer mx-7 my-7 w-[18rem] sm:w-[22rem]' >
        <div className='relative mb-3'>
          <img className='rounded-xl hover:rounded-none ease-in-out duration-700' src={snippet.thumbnails.high.url} alt="thumbnail" />
          <p className='bg-black text-white inline absolute bottom-1 right-1 font-bold'>{time}</p>
        </div>
        <div>
            <p  className='font-bold mb-2'>{snippet.title}</p>
            <div>
            <h1 className=''>{snippet.channelTitle}</h1>
            <h1>{statistics.viewCount} views</h1>
            </div>
           
        </div>
    </div>
  )
}

export default VideoCard