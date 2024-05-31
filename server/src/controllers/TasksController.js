const express = require("express");
const router = express.Router();
const database = require("../services/database");
const { createTask, deleteTask } = require("../models/Task");

router.get("/tasks", (req, res) => {
  database.pool
    .query("SELECT * FROM tasks")
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

router.post("/tasks", async (req, res) => {
  const task = req.body;

  try {
    await createTask(task);
    res.status(201).send("Task created");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    await deleteTask(req.params.id);
    res.status(204).send("Task deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
