const express = require("express");
const path = require("path");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render("shop.ejs", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        shopCSS: true,
    });
});

module.exports = router;
