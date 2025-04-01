import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskScheduler from "./components/TaskScheduler"; // Keep only this reference

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Task Scheduler
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskScheduler />} />
      </Routes>
    </Router>
  );
}

export default App;
