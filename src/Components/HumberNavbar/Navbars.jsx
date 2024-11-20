import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbars = () => {
    let listArr=[{name:"Home",path:'/Home'},{name:"Products",path:'/Products'},{name:"Services",path:'/Services'},{name:"About Us",path:'/About'},{name:"Contact",path:'/Contact'}];
    let icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>;
  let [iconDisplay,setIconDisplay]=useState("block");
  let [listDisplay,setListDisplay]=useState("hidden");
  const [count,setCount]=useState(0);

  let run=()=>{
      if(count==0)
      {
        setListDisplay("flex");
        setCount(1);
      }
      else if(count==1)
      {
        setListDisplay("hidden");
        setCount(0);
      }
  }
  
  return (
    <div className='sm:flex justify-between bg-[blue] shadow-2xl shadow-black text-white'>
    <div className=' flex justify-between pr-[2rem] p-5'>
        <p className='text-3xl font-bold ml-10'>Logo</p>
        <p className={`sm:hidden p-3 ${iconDisplay}`} onClick={run}>{icon}</p>
        </div>
        <div className={`flex-col sm:flex-row p-5 bg-[blue] border-t-2 sm:border-t-0  sm:bg-[blue] gap-[2rem] items-center  font-semibold sm:flex ${listDisplay}`}>
    
{
    listArr.map((item,index)=>(
        <Link key={index} to={item.path}  className="hover:underline" >{item.name}</Link>
    ))
}
    </div>
    </div>
  )
}

export default Navbars