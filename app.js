const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
  res.send("<h1>This is Users Page.</h1>");
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add</button></form>"
  );
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is Home Page.</h1>");
});

app.listen(3001);
