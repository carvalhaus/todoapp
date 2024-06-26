const express = require("express");
const cors = require("cors");
const AuthFirebaseToken = require("./middlewares/firebase-admin");
const TasksController = require("./controllers/TasksController");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/api", TasksController);

app.get("/api", AuthFirebaseToken, (req, res) => {
  res.send("API REQUEST RESPONSE");
});

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Tasks API",
    version: "1.0.0",
    description: "A simple Express API for managing tasks",
  },
  components: {
    schemas: {
      Task: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The unique identifier for the task",
          },
          title: {
            type: "string",
            description: "The title of the task",
          },
          created_at: {
            type: "string",
            format: "date-time",
            description: "The creation date of the task",
          },
          duration_days: {
            type: "integer",
            description: "The duration of the task in days",
          },
          user_id: {
            type: "string",
            description: "The ID of the user who owns the task",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: {
            type: "string",
            description: "The error message",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["src/controllers/*.js"], // Path to the API docs
};

const specs = swaggerjsdoc(options);

app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log("Server is running in port:", port);
});
