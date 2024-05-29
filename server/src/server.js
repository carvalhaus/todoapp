const express = require("express");
const app = express();
const database = require("./services/database");
const port = 3001;

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

app.listen(port, () => {
  console.log("Server is running in port:", port);
});
