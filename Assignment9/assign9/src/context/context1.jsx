import { createContext, useState } from "react";

// Creating context object to share task data/functions across components
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Store the list of tasks in state
  const [tasks, setTasks] = useState([]);

  // Function to add a new task (assigns a unique ID using timestamp)
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  // Function to update an existing task (by matching its ID)
  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  // Function to delete a task based on its ID
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  // Wrapping children with the TaskContext provider
  // Passing the state and methods to be used anywhere in the app
  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
