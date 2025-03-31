import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Omnira QA Demo – Task Scheduler</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
