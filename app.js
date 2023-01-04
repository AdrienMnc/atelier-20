const express = require("express");
const app = express();

// import routes and controllers here
const login = require("./routes/login");

// define routes here
app.use(express.json());
app.use("/login", login);

// define controllers here

module.exports = app;
