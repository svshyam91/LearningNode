const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const adminData = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001);
