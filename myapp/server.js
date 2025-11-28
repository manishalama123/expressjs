const express = require('express');
const app = express();

// route import gareko
const userRoutes = require('./routes/users');

// link the route
app.use('/users', userRoutes);

app.get('/', (req, res)=>{
    res.send("Hello World");
})


app.listen(3000, ()=>{
    console.log("Server is running on 3000 port");
})