//import env file in this app file this env is to secure your sensitive data.

require("dotenv").config();

// import express in app

const express = require("express");

// import db in app

const connectDb = require("./config/db.js");
//import cores 

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const userRoutes = require("./routes/user.routes.js");

app.use("/", userRoutes);

connectDb();
module.exports = app; // export like this because we are not using in package.json.
