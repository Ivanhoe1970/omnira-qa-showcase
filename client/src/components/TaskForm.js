import React, { useState } from "react";

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, cost }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message); // Display server validation error
        return;
      }

      setTitle('');
      setCost('');
      setError('');

      // ✅ Instead of appending manually, re-fetch all tasks to avoid duplication
      const updated = await fetch('http://localhost:4000/tasks');
      const updatedTasks = await updated.json();
      setTasks(updatedTasks);

    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="cost"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default TaskForm;
