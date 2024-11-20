import React, { useReducer, useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState("");

  function reducer(state, action) {
    if (action.type === "Add" && action.text !== "") {
      return [...state, action.text];  ///...state=>old state ko dekhega or new state ko copy krega;
    } else if (action.type === "remove") {
      return state.filter((_, number) => number !== action.index);
    } else {
      return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, []);

  return (
    <div className='text-center '>
      <h1 className='underline font-bold  text-3xl mt-20'>ToDo List</h1>
     <div className='mt-10'>
       <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
      className='outline-none border-b-2 border-black bg-white w-72 p-2 rounded-xl shadow-inner shadow-black'
        type="text"
      />
      <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={() => {
        dispatch({ type: 'Add', text: input });
        setInput("");
      }}>
        Add
      </button>
      {count.map((item, index) => (
        <div key={index} className="flex gap-4 justify-center mt-5">
          <p className=''>{item}</p>
          <button onClick={() => dispatch({ type: "remove", index: index })}>
            Remove
          </button>
        </div>
      ))}
    </div>
     </div>
  );
}

export default TodoList;
