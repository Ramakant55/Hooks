import React, { useState } from "react";
import ComplexComponent from "./ComplexComponent";

const ParentComponent = () => {
  const [title, setTitle] = useState("My List");
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <ComplexComponent title={title} items={items} />
      <button
        onClick={() => setTitle("Updated List")}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Change Title
      </button>
      <button
        onClick={() => setItems([...items, "Grape"])}
        className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
      >
        Add Item
      </button>
    </div>
  );
};

export default ParentComponent;
