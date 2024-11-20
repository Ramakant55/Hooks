import React, { useState } from 'react'

const ToggleVisible = () => {
    const [display,setDisplay]=useState(false);


  return (
    <div className='p-10 mt-20 text-white rounded-3xl bg-gray-400'>
    <div className='flex'>
    <h1>What is useState in react ?</h1>
    <button onClick={()=>setDisplay(!display)} className=' rounded-lg ml-4'>Click me</button>
    </div>
{display && <h1>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</h1>}
    </div>
  )
}

export default ToggleVisible