const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const adminData = require("./routes/admin");

const app = express();
app.engine(
  "handlebars",
  expressHbs({
    layoutDirs: "views/layouts",
    defaultLayout: "main-layout.handlebars",
  })
);
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404.handlebars", { pageTitle: "Page Not Found" });
});

app.listen(3001);
