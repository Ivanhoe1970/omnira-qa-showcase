const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  if (!task.title || !task.cost) {
    return res.status(400).json({ message: "Title and cost are required." });
  }
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(4000, () => {
  console.log("🚀 Mock API running on http://localhost:4000");
});
