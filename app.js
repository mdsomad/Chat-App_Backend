require("dotenv").config();

const mongoose  = require("mongoose");
const connectDatabase = require("./config/database");
const express = require("express");
const app = express();




//* Connecting to database
connectDatabase();


const userRoute = require("./routes/userRoute");
app.use("/",userRoute)



const http = require("http").Server(app)



http.listen(5000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});