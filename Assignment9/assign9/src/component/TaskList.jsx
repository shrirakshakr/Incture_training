import { useContext } from "react";
import { TaskContext } from "../context/context1";
import TaskForm from "./TaskForm"; // Importing to access handleEditTask

function TaskList() {
  // Using context to get current tasks and delete function
  const { tasks, deleteTask } = useContext(TaskContext);

  // Called when user clicks Edit button
  const handleEdit = (task) => {
    TaskForm.handleEditTask(task); // Calling method in TaskForm to set title and id
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>

      {/* Show message if task list is empty */}
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {/* Display task title */}
              {task.title}

              {/* Edit and Delete buttons beside each task */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
