import React, { useEffect, useState } from 'react'
import HamMenu from "../Assests/hammenu.jpg"
import Youtube from "../Assests/youtube.jpg"
import UserIcon from "../Assests/usericon.jpeg"
import { toggleSidebar } from '../utils/sidebarSlice'
import { useDispatch,useSelector } from 'react-redux'
import { SEARCH_API } from '../utils/constants'
import { TfiSearch } from "react-icons/tfi";
import { cacheResults } from '../utils/searchSlice'
import { Link } from 'react-router-dom'


const Header = () => {
const [SearchQuery,setSearchQuery]=useState("");
const [Suggestions,setSuggestions]=useState([]);
const [ShowSuggestions,setShowSuggestions]=useState(false);
const dispatch=useDispatch();
const searchCache=useSelector(state=>state.search);



useEffect(()=>{
       
     const timer=setTimeout(() => {
     if(searchCache[SearchQuery]){
      setSuggestions(searchCache[SearchQuery])
     } 
     else{
      getSearchSuggestions();
     }  
     },200);

     return ()=>{
      clearTimeout(timer);
     }
},[SearchQuery])

const getSearchSuggestions=async()=>{
  const data=await fetch(SEARCH_API + SearchQuery);
  const json=await data.json();
  setSuggestions(json[1]);
  dispatch(cacheResults({
    [SearchQuery]:json[1],
  }))

}



 const toggleSidebarHandler=()=>{
  dispatch(toggleSidebar());
 }


 return (
    <div  className='grid grid-flow-col shadow-lg fixed top-0 z-30 bg-white w-screen'>
        <div className=' flex items-center md:col-span-3'>
        <img className='h-12 cursor-pointer hidden md:block' src={HamMenu} alt="ham-menu" onClick={()=>toggleSidebarHandler()} />
        
        <Link to={"/"}><img className='h-16 cursor-pointer' src={Youtube} alt="youtube-icon" /></Link>
        </div>
       
       <div className='py-4 sm:pl-5  md:pl-40 md:col-span-10'>
      <div>
        <input className='border-2 border-gray-200 rounded-l-full w-[7rem] sm:w-[10rem] md:w-[35rem] p-2' 
       type="text"  
       value={SearchQuery}
       onChange={(e)=>{
        setSearchQuery(e.target.value)
        window.localStorage.setItem('Result_STATE',SearchQuery);
      }}
       onFocus={()=>setShowSuggestions(true)}
       onBlur={()=>setShowSuggestions(false)}
       placeholder='search'/>
        
        
        <Link to={"/results"}><button className='border-2 border-gray-200 bg-slate-200 rounded-r-full py-[11px] px-4'><TfiSearch/></button></Link>
      </div>
        {(ShowSuggestions)&&
           <div className='fixed bg-white w-[37%] rounded-2xl  text-md font-sans cursor-pointer shadow-lg'>
             <ul>
            
               {
                 Suggestions.map((s,i)=>{
                  return  <li className='hover:bg-gray-100 py-2 px-3 border-b border-b-gray-200' key={i}>
               
                  {s}
                  </li>
                 })
                }
              
             
             </ul>
           </div>
        }
        

       </div>
        
              <div className='pt-7 col-span-1'>
              <img className='h-6 cursor-pointer' src={UserIcon} alt="userIcon" />
              </div>
      
    </div>
  )
}

export default Header;