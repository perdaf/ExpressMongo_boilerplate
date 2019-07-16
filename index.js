const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const routes = require("./routes/routes");

require("dotenv").config();
const PORT = process.env.NODE_ENV == "development" ? 3000 : process.env.PORT;

app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.use("/api", routes);

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
