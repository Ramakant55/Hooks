import React, { useRef, useState } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className='p-40 ml-80'>
      <h2 className='font-bold w-56 bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black'>Stopwatch: {time} seconds</h2>
     <div className='ml-4 mt-3'>
     <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={startTimer}>Start</button>
      <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={stopTimer}>Stop</button>
      <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={resetTimer}>Reset</button>
     </div>
    </div>
  );
};

export default StopWatch;
