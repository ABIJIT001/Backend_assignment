const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv/config");
const app = express();

//use middlewares
app.use(express.json())

//home page
app.get("/home", (req,res)=>{
   res.send("welcome to home page")
})

//importing routes
const createRoute = require('./routes/create')
app.use("/create", createRoute);
const updateRoute = require('./routes/update')
app.use("/update", updateRoute);
const getRoute = require('./routes/getid')
app.use("/get", getRoute);
const deleteRoute = require('./routes/delete')
app.use("/delete", deleteRoute);
//connect to db
//removed the env link for privacy reason
//you can just paste your mongodb connection link here
mongoose.connect(
    process.env.DBCONNECTION,
    ()=> console.log("connected to db")
    )


app.listen(3000,()=>{console.log("Server is listening on port 3000")})