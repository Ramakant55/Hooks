import React from "react";

const TaskCard = ({ task }) => {
  const statusColors = {
    complete: "bg-green-100",
    "in progress": "bg-yellow-100",
    pending: "bg-red-100",
  };

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 ${statusColors[task.status]}`}>
      <h2 className="font-bold text-xl mb-2">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-gray-600 font-bold mt-2">Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
