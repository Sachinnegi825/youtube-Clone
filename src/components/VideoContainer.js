import React, { useEffect,useState } from 'react'
import {YOUTUBE_API} from "../utils/constants"
import VideoCard from "./VideoCard"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const isSidebarOpen=useSelector(store=>store.sidebar.isSidebarOpen);

  useEffect(()=>{
    getVideos();
  },[])

 const getVideos=async()=>{
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();
        console.log(json)
        setVideos(json.items)
 }


  return (
    <div className={(isSidebarOpen)?'mt-20 md:mt-36 ml-32 ':"mt-20 md:mt-36 ml-0"}>
      <div className='w-[50%] mx-2 md:w-[90%] md:mx-auto'>
        <div className='flex justify-center flex-wrap'>
        {
        videos.map((video)=>{
          return <Link to={"/watch?v="+ video.id}> <VideoCard {...video} key={video.id}/></Link>
        })
      }
        </div>
     
      </div>
     
      
    </div>
  )
}

export default VideoContainer

// https://youtube.googleapis.com/youtube/v3/playlists?key=