import React, { useEffect, useState } from 'react'
import LivechatMessages from './LivechatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { messagesArr,nameArr } from '../utils/constants';




const LiveChat = () => {
    const [liveMessage,setLivemessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages)


    
    useEffect(()=>{
        const i=setInterval(()=>{
         
        let random=Math.floor(Math.random()*10);

        dispatch(
            addMessage({
                name:nameArr[random],
                message:messagesArr[random]
            })
        )    

        },1000)

        return ()=>clearInterval(i);
    },[])

  return (
    
    <div className='border border-black bg-gray-200 rounded-lg'>
      <p className=' bg-white p-2 text-lg w-full h-10'> LiveChat</p>
       <div className='flex flex-col-reverse w-full h-[420px]  overflow-y-scroll relative'>
       
      
     
       {
          chatMessages.map((messages,i)=>{
             return <LivechatMessages name={messages.name} message={messages.message} key={i}/>
          })
       }
       
       
       
         
    </div>

      <form action="" 
      className='bg-white' 
      onSubmit={(e)=>{
         e.preventDefault();
         dispatch(
            addMessage({
                name:"Sachin Negi",
                message:liveMessage
            })
        )    
        
        setLivemessage("")
      }}>

      <input type="text" 
      className='bg-white h-10 w-4/5 border-r-2 border-black' 
      value={liveMessage}
      onChange={(e)=>setLivemessage(e.target.value)}
      placeholder='chat.....'/>


      <button className='w-1/5 mx-auto' >Send</button>
     
      </form>
     
 
 
     </div>
  )
}

export default LiveChat