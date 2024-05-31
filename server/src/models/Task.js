const database = require("../services/database");
const { v4: uuidv4 } = require("uuid");

const createTask = async (task) => {
  const id = uuidv4();
  const query = `
      INSERT INTO tasks (id, title, created_at, duration_days, user_id)
      VALUES ($1, $2, $3, $4, $5);
    `;
  const values = [
    id,
    task.title,
    task.created_at,
    task.duration_days,
    task.user_id,
  ];
  try {
    await database.pool.query(query, values);
    console.log("Task inserted");
  } catch (error) {
    console.error("Error inserting task", error);
  }
};

const deleteTask = async (id) => {
  const query = `DELETE FROM tasks WHERE id= $1`;
  const values = [id];

  try {
    await database.pool.query(query, values);
    console.log("Task deleted");
  } catch (error) {
    console.error("Error deleting task", error);
  }
};

module.exports = {
  createTask,
  deleteTask,
};
