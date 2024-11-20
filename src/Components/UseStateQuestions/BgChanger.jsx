import React, { useState } from 'react'

const BgChanger = () => {
    const [color,setColor]=useState("");
  return (
    <div className='h-screen' style={{backgroundColor:`${color}`}}>
<select onChange={(e)=>setColor(e.target.value)}>
  <option value="White">Choose Color</option>
  <option value="Red">Red</option>
  <option value="Green">Green</option>
  <option value="Blue">Blue</option>
  <option value="Yellow">Yellow</option>
  <option value="Gray">Gray</option>
</select>
    </div>
  )
}

export default BgChanger