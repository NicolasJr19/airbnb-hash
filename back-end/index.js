import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT } = process.env;

app.get("/users", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(404).json(error)
  }
});

app.post("/users", async (req, res) => {
  connectDb();

  try {
    const newUserDoc = await User.create({
        name: "Jorge",
        email: "jorge@jorge.com",
        password: "12345678@",
      });
      res.json(newUserDoc)
  } catch (error) {
    res.status(500).json(error)
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está rondando na porta ${PORT}`);
});
