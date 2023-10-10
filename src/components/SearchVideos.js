import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
const SearchVideos = () => {
const [Videos,SetVideos]=useState([]);
let val=localStorage.getItem('Result_STATE');


useEffect(()=>{
  
    SearchResults();
},[])

const SearchResults=async()=>{
    const data= await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=" +val +"&key=AIzaSyAOUAJFOFAMiIpDF_1gLoTjjwgra33eZ1U");
    const json=await data.json();
    SetVideos(json?.items);
  
}

  return (
    <div className='relative top-32 md:left-72  md:w-[80%]'>
    
        <div className='flex flex-col gap-16'>
        {
        Videos?.map((video,i)=>{
          return <Link to={"/watch?v="+ video.id} key={i}> <SearchCard {...video} /></Link>
        })
      }
      
        </div>
     
    </div>
  )
}

export default SearchVideos