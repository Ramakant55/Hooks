import React, { useMemo } from "react";

const ComplexComponent = ({ title, items }) => {
  // Memoized rendering logic
  const renderedItems = useMemo(() => {
    console.log("Rendering items...");
    return items.map((item, index) => (
      <li key={index} className="px-4 py-2 hover:bg-gray-100 transition">
        {item}
      </li>
    ));
  }, [items]); // Only re-compute when `items` prop changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <ul className="w-64 bg-white border border-gray-300 rounded-lg shadow divide-y divide-gray-200">
        {renderedItems}
      </ul>
    </div>
  );
};

export default ComplexComponent;
