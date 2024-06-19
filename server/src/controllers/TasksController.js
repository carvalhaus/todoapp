const express = require("express");
const router = express.Router();
const database = require("../services/database");
const {
  createTask,
  deleteTask,
  updateTask,
  selectTask,
} = require("../models/Task");

router.get("/tasks/:user_id", async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const result = await selectTask(user_id);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/tasks", async (req, res) => {
  const task = req.body;

  try {
    await createTask(task);
    res.status(201).send("Task created");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    await deleteTask(req.params.id);
    res.status(204).send("Task deleted");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const task = req.body;
  try {
    await updateTask(id, task);
    res.status(204).send("Task updated");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
