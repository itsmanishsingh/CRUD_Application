require("dotenv").config();
const express = require("express");
const userRoutes = require('./routes/userRoutes')
const connectToDB = require('./config/db')
const app = express();
// const cors = require("cors");

//Middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// Connecting with DataBase
connectToDB();

app.use("/" , userRoutes)

/*
app.use() is used instead of app.get()
This function adds a new middleware to the app , Suppose you want to print the HTTP method:(get,post,etc)
*/

module.exports = app;