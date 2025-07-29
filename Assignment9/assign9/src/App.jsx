import "./App.css";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { TaskProvider } from "./context/context1";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Management</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
