import React, { useState, useMemo } from "react";

const CounterWithColor = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000000");

  
  const generateRandomColor = useMemo(() => {
    return () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 " style={{ backgroundColor: color }}>
      <h1 className="text-3xl font-bold mb-6">Counter: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 mb-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-inner shadow-black"
      >
        Increment
      </button>
      <div className="flex flex-col items-center mt-4">
        <button
          onClick={generateRandomColor}
          className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-inner shadow-black"
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default CounterWithColor;
