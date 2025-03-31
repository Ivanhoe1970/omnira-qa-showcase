import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Scheduled Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.title} – ${task.cost}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
