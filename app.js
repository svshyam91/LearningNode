const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>This is Users Page.</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is Home Page.</h1>");
});

app.listen(3001);
