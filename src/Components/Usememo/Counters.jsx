import React, { useMemo, useState } from 'react'

const Counters = () => {
    const [count,setCount]=useState(0);
    const [otherValue,setOtherValue]=useState(0);
    const expensiveCalculation=(num)=>{
        console.log(' Calculating...')
    for(let i=0;i<10000000;i++){}
return num*2 ;
 }
    const memoizedValue=useMemo(()=>expensiveCalculation(count),[count]);
  return (
    <div className='mt-40 ml-96'>
        <h2 className='text-center font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black'>Count:{count}</h2>
        <button className='mt-3 font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={()=>setCount(count+1)}>increment</button>
        <h2 className='mt-3 text-center font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black'>Other Value:{otherValue}</h2>
        <button className='mt-3 font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={()=>setOtherValue(otherValue+1)}>Increment Other Value</button>
        <h3 className='mt-3 text-center font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black'>Expensive Calculation:{memoizedValue}</h3>

    </div>

  )
}

export default Counters