var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

// Router
var coursesRouter = require("./routes/courses");
// app 
var app = express();
// mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/RBUdemyDB");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/courses", coursesRouter);

module.exports = app;
