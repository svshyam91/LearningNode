const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404.ejs", { pageTitle: "Page Not Found" });
});

app.listen(3001);
