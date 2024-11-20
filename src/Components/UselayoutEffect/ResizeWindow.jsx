import React, { useLayoutEffect, useRef, useState } from 'react'

const ResizeWindow = () => {
    const [bgColor,setBgcolor]=useState("lightblue");
    const divRef=useRef(null);
    useLayoutEffect(()=>{
        const width=divRef.current.offsetWidth;
        if(width>500){
            setBgcolor("lightgreen");
        }
        else{
            setBgcolor("red");
        }
    },[])
  return (
    <div ref={divRef}
    style={{backgroundColor:bgColor}}
      className='w-[80%] p-20 text-center m-auto mt-20'
        >
            Change the screen size to change the color of div in background;
    </div>
  )
}

export default ResizeWindow
