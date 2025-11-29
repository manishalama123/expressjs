import express from "express";
import userRouter from "./routes/users.js";

const app = express();
app.use("/api", userRouter);

app.listen(3000, ()=>{
    console.log("hello on 3000 port");
})