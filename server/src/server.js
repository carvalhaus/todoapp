const express = require("express");
const cors = require("cors");
const AuthFirebaseToken = require("./middlewares/firebase-admin");
const TasksController = require("./controllers/TasksController");

const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/api", AuthFirebaseToken, TasksController);

app.get("/api", AuthFirebaseToken, (req, res) => {
  res.send("API REQUEST RESPONSE");
});

app.listen(port, () => {
  console.log("Server is running in port:", port);
});
