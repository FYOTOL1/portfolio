import express from "express";
import mongoose from "mongoose";
import projects from "./routes/projects";
import skills from "./routes/skills";
import messages from "./routes/messages";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://fyotol:fyotol2008@portfolio-app.njx2h.mongodb.net/portfolio-app?retryWrites=true&w=majority&appName=portfolio-app"
  )
  .then(() => console.log("Connected To DB"))
  .catch((rej) => console.log("Failed to Connect To DB: ", rej));

app.use("/projects", projects);
app.use("/skills", skills);
app.use("/messages", messages);

app.listen(3009, () => {
  console.log("Server is running on port 3000");
});
