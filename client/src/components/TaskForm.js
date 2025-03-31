import React, { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !cost) {
      setError("Both title and cost are required.");
      return;
    }

    const newTask = { title, cost };

    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    if (res.ok) {
      setTasks((prev) => [...prev, data]);
      setTitle("");
      setCost("");
      setError("");
    } else {
      setError(data.message || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        name="cost"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
