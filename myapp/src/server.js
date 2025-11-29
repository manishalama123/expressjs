import express from "express";
import userRouter from "./routes/users.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB();
const PORT = process.env.PORT || 5001;

app.use("/api", userRouter);

app.listen(PORT, ()=>{
    console.log("hello on port", PORT);
})

