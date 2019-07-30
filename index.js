const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const connectDb = require("./config/db");

require("dotenv").config();

const app = express();

// connect to mongoDB
connectDb();

// views folder and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//define routes
const index = require("./routes/index");
const users = require("./routes/users");

// define the PORT
const PORT = process.env.NODE_ENV == "development" ? 3000 : process.env.PORT;

// middleware
app.use(logger("combined"));
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// use routes folder
app.use("/", index);
app.use("/api/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`server connect on port ${PORT}`);
});
