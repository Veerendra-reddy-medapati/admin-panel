require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Prompt = require("./Prompt");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// CREATE
app.post("/api/prompts", async (req, res) => {
  const newPrompt = await Prompt.create(req.body);
  res.send(newPrompt);
});

// GET
app.get("/api/prompts", async (req, res) => {
  const Getprompts = await Prompt.find().sort({ _id: -1 });
  res.send(Getprompts);
});

// UPDATE
app.put("/api/prompts/:id", async (req, res) => {
  const updatedPrompt = await Prompt.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.send(updatedPrompt);
});

// DELETE
app.delete("/api/prompts/:id", async (req, res) => {
  await Prompt.findByIdAndDelete(req.params.id);

  res.send("Deleted Successfully");
});

app.listen(process.env.PORT, () => {
  console.log("server running on port 5000");
});
