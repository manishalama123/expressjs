import express from "express";
import userRouter from "./routes/users.js";
import { getAllNotes, createNotes } from "./controller/noteController.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use("/api/notes", userRouter);



app.listen(PORT, ()=>{
    console.log("hello on port", PORT);
})

