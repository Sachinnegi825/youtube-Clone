import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isSidebarOpen=useSelector(store=>store.sidebar.isSidebarOpen);

  const explores=["Trending","Shoping","Live","News","Music","Movies","Sports","Learning","Gaming"]

  if(!isSidebarOpen) return null;
  return (
    <div className='relative  z-20  top-16'>
      <div className='fixed overflow-y-scroll shadow-lg p-5  h-screen cursor-pointer hidden md:block bg-white'>
      <div className='border-b-2 mb-4'>
        <h1 className='p-4 hover:bg-slate-200'><Link to="/"> Home</Link></h1>
        <h1 className='p-4 hover:bg-slate-200'>Shorts</h1>
        <h1 className='p-4 hover:bg-slate-200'>Subscriptions</h1>
      </div>
      <div className='border-b-2 mb-4'>
        <h1 className='p-4 hover:bg-slate-200'>Library</h1>
        <h1 className='p-4 hover:bg-slate-200'>History</h1>
        
      </div>
      <div className='border-b-2 mb-4'>
      <h1 className='font-bold text-2xl'>Explore</h1>
      <ul>
      {
        explores.map((list)=>{
          return <li className='p-4 hover:bg-slate-200' key={list}>{list}</li>
        })
      }
        </ul>
      </div>
      <div className='h-20'>
           <p>© 2023 Google LLC</p>
      </div>
      </div>
      
      
    </div>
  )
}

export default Sidebar