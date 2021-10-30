var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var path = require("path");
var fs = require("fs");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api");

var app = express();
app.use(cors());
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(logger("common", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", usersRouter);

module.exports = app;
