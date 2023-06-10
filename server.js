import express from "express";
const app = express();

const PORT = 8000;

//middleawre
app.use(express.json());

//api endpoints
import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({
    message: "server running healthy",
  });
});

app.get("/", (req, res) => {
  res.json({ message: "server running healthy" });
});

app.get("/", (req, res) => {
  res.json({ message: "server running healthy" });
});

// open port to http request to access the server
app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
