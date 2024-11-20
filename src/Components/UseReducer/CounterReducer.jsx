import React, { useReducer } from 'react'

const CounterReducer = () => {
    let reducer=(state,action)=>{
        if(action.type==="increment")
            return state+1;
        else if(action.type==="decrement")
            return state-1;
        else if(action.type==="reset")
            return 0;
        
    }
    let [state,dispatch]=useReducer(reducer,0);
    return (    
        <div className='bg-gray-200'>
      <div className='font-semibold text-center flex justify-center items-center h-screen flex-col'>
      <p className='border-b-2 border-black bg-white w-96 p-5 rounded-xl shadow-inner shadow-black'>Count: {state}</p>
      <div className='flex gap-5 py-5'>
      <button className='bg-white w-20 p-3 text-3xl border-b-2 border-black  rounded-xl shadow-inner shadow-black' onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button className='bg-white w-20 p-3 text-3xl border-b-2 border-black  rounded-xl shadow-inner shadow-black' onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button className='bg-white block border-b-2 border-black  w-20 p-5 rounded-xl shadow-inner shadow-black' onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
    </div>

 </div>
    
  )
}

export default CounterReducer