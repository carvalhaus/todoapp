const database = require("../services/database");
const { v4: uuidv4 } = require("uuid");

const selectTask = async (id) => {
  const query = `SELECT * FROM tasks WHERE user_id = $1`;

  const user_id = [id];
  try {
    const result = await database.pool.query(query, user_id);
    console.log("Task listed");
    return result;
  } catch (error) {
    console.error("Error listing task", error);
  }
};

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

const updateTask = async (id, task) => {
  const query = `
      UPDATE tasks
      SET title= $1, created_at= $2, duration_days= $3
      WHERE id= $4
    `;
  const values = [task.title, task.created_at, task.duration_days, id];
  try {
    await database.pool.query(query, values);
    console.log("Task updated");
  } catch (error) {
    console.error("Error inserting task", error);
  }
};

module.exports = {
  selectTask,
  createTask,
  deleteTask,
  updateTask,
};
