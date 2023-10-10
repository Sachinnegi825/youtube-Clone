import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { closeSidebar } from '../utils/sidebarSlice';
import {useSearchParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';


const WatchPage = () => {
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();


  useEffect(()=>{
         dispatch(closeSidebar());
  },[])

  return (
    <div className='relative top-28 md:left-20 md:w-[93%]'>
      <div className='flex flex-col md:flex-row w-full'>
        <div>
        <iframe 
           className='rounded-xl w-[310px] h-[200px] sm:w-[370px] sm:h-[250px] md:w-[900px] md:h-[500px]'
           width="900" 
           height="500" 
           src={"https://www.youtube.com/embed/"+searchParams.get("v")}
           
           
           title="Abhishek Ne IPHONE 15 PRO MAX GOLD le liya 😍" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen>

           </iframe>

        </div>
        <div className=' w-[93%] mt-10 md:w-full md:mt-0 md:ml-3'>
          <LiveChat/>
        </div>
      
          
       </div>
      
       <CommentSection/>
         
    </div>
  )
}

export default WatchPage