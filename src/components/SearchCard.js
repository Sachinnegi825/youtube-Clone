import React from 'react'

const SearchCard = ({snippet}) => {
 
  return (
    <div className='cursor-pointer flex flex-col md:flex-row gap-5'>
        <div className='relative mb-3 basis-1/3 object-cover'>
          <img className='rounded-xl hover:rounded-none ease-in-out duration-700' src={snippet.thumbnails.high.url} alt="thumbnail" />
          {/* <p className='bg-black text-white inline absolute bottom-1 right-1 font-bold'>{time}</p> */}
        </div>
        <div>
            <p  className='font-bold mb-2'>{snippet.title}</p>
            <div>
            <h1 className=''>{snippet.channelTitle}</h1>
           
        </div>
           
        </div>
    </div>
  )
}

export default SearchCard;