import React from 'react'
import Buttons from "./Buttons"
import { useSelector } from 'react-redux';



const ButtonList = () => {
  const isSidebarOpen=useSelector(store=>store.sidebar.isSidebarOpen);
  const lists=["All","Messi","UFC","VALORANT","JavaScript","PanCakes","Computer Science","Mancity","Dragon Ball","Acr Vlogs"];
  return (
    <div className={(isSidebarOpen)?' relative top-[4.7rem] z-10 left-52 w-screen  hidden md:block':'relative top-[4.7rem] z-10 left-32 w-screen  hidden md:block'}>
      <div className='flex bg-white fixed w-screen'>
      {
      lists.map((list,i)=>{
         return <Buttons key={i} name={list}/>
      })
     }
      </div>
    
   
    </div>
  )
}

export default ButtonList