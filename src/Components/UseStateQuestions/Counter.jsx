import React, { useState } from 'react';

function Counter() {
  const [count,setCount] = useState();
  const [value,setValue] = useState();
  const incr = () => {
    const plus = Number(value);
    setCount(count+plus);
  };
  const decr = () => {
    const minus = Number(value);
    if(count>0)
    setCount(count-minus);
  else{
    setCount(0);
  }
  };
  const rst = () => {
     setCount(0);
     setValue(0);
  };
  
    return (
      <div className='flex justify-center items-center bg-gradient-to-l from-gray-600 h-[100vh]'>
        <div className='pt-5'>
        <input value={value} className='md:text-xl border-2 rounded-lg border-black block md:h-10 md:w-[600px] h-10 w-[80vw] md:mx-auto text-center'
            type='number' onChange={(e) => setValue(e.target.value)}
            placeholder='Enter any number'></input>
         <p className='md:text-xl border-2 rounded-lg border-black block md:h-10 md:w-[300px] h-10 w-[80vw] md:mx-auto text-center mt-10 bg-white'>Count={count}</p> 

          <div className='flex justify-center items-center pt-10'>
            <button onClick={incr}
              className='h-[8vh] w-[25vw] md:w-[5vw] bg-[red] text-white rounded-lg text-3xl'>+</button>
            <button onClick={decr}
              className='h-[8vh] w-[25vw] md:w-[5vw] bg-[red] text-white rounded-lg text-3xl ml-10'>-
            </button>        
          </div>
          <div className='flex justify-center items-center pt-5'>
          <button onClick={rst} className='h-[6vh] w-[25vw] md:w-[15vw] bg-[red] text-white rounded-lg'>Reset</button>
          </div>
        </div>
      
      </div>
    );
  }
  
  export default Counter;
  