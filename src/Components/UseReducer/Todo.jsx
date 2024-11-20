import React, { useState, useReducer } from 'react';

const initialState = [];

const Todo = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'Add':
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case 'Remove':
        return state.filter((todo) => todo.id !== action.payload);
      case 'Complete':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  }

  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'Add', payload: text });
      setText('');
    }
  };

  return (
    <div className='text-center mt-5'>
      <h1 className='underline font-bold  text-3xl mt-20'>Todo List</h1>
      <input className='mt-5 outline-none border-b-2 border-black bg-white w-72 p-2 rounded-xl shadow-inner shadow-black' onChange={(e) => setText(e.target.value)} value={text} placeholder='Enter the value' />
      <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={handleAdd}>Add</button>
      <ul>
        {state.map((todo) => (
          <li className="flex gap-4 justify-center mt-5" key={todo.id}>
            <span
              className='flex'
              onClick={() => dispatch({ type: 'Complete', payload: todo.id })}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >    
              <p className=''>{todo.text}</p>
              <button className='font-bold w-16 bg-red-500 ml-3 border-b-2 border-black rounded-xl text-xs shadow-inner shadow-black text-white' onClick={() => dispatch({ type: 'Remove', payload: todo.id }) }>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
