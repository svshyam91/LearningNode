const express = require("express");

const router = express.Router();

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add</button></form>"
  );
});


module.exports = router;