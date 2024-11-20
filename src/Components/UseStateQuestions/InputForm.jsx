import React, { useState } from 'react'

const InputForm = () => {
    const [fname,setFName]=useState("");
    const [lname,setLName]=useState("");
  return (
    <div>
        <h1 className='text-center'>Input Form</h1>
        <form className='text-center'>
            <input  className='border-2 border-black' onChange={(e)=>setFName(e.target.value)} type='text' placeholder='first name'></input>
            <input  className='border-2 border-black ml-2' onChange={(e)=>setLName(e.target.value)} type='text' placeholder='last name'></input>
        </form>
        <h1>{`${fname}${lname}`}</h1>
    </div>
  )
}

export default InputForm