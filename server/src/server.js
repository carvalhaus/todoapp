const express = require("express");
const cors = require("cors");
const database = require("./services/database");
const AuthFirebaseToken = require("./middlewares/firebase-admin");

const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;

app.get("/api", AuthFirebaseToken, (req, res) => {
  res.send("API REQUEST RESPONSE");
});

app.get("/authors", (req, res) => {
  database.pool
    .query("SELECT * FROM author")
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

app.get("/tasks", (req, res) => {
  database.pool
    .query("SELECT * FROM tasks")
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log("Server is running in port:", port);
});
