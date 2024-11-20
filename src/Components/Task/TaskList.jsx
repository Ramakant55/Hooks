import React from "react";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = [
    { title: "Design Homepage", description: "Create a responsive homepage design.", status: "complete" },
    { title: "Develop Login Page", description: "Build a secure login page.", status: "in progress" },
    { title: "Set up Database", description: "Configure database for the application.", status: "pending" },
    { title: "Testing and Bug Fixes", description: "Perform QA and fix bugs.", status: "in progress" },
  ];

  return (
   <div>
     <h1 className="text-3xl font-bold mb-8 text-center mt-10">Task List with Status</h1>
     <div className="flex flex-wrap justify-center">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
   </div>
  );
};

export default TaskList;
