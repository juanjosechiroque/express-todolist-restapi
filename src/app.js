const express = require("express");
const morgan = require("morgan");

// Initializations
const app = express();
require("./config/database.js");

// Settings
app.set("port", process.env.PORT || 3000);

// Headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS  ");
    next();
});

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/todo", require("./routes/todo.js"));

module.exports = app;