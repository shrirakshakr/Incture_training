import { useState, useContext } from "react";
import { TaskContext } from "../context/context1";

function TaskForm() {
  // Using context to access addTask and updateTask methods
  const { addTask, updateTask } = useContext(TaskContext);

  // Local state to manage the current task title entered in input
  const [title, setTitle] = useState("");

  // To track if we are editing an existing task (stores task id)
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Function triggered on form submission (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (title.trim() === "") return; // ignore empty inputs

    if (editingTaskId !== null) {
      // If editing, update the task by id
      updateTask({ id: editingTaskId, title });
    } else {
      // If not editing, add a new task
      addTask({ title });
    }

    // Clear input and reset editing state
    setTitle("");
    setEditingTaskId(null);
  };

  // Called from TaskList when Edit is clicked
  const handleEditTask = (task) => {
    setTitle(task.title); // pre-fill input with task title
    setEditingTaskId(task.id); // store task id to update later
  };

  // Exposing this method so TaskList can call it (less common pattern)
  TaskForm.handleEditTask = handleEditTask;

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field to enter or edit task */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // updates local title state
        required
        placeholder="Enter task"
      />
      <br />

      {/* Button label changes based on Add or Update mode */}
      <button type="submit">
        {editingTaskId !== null ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
