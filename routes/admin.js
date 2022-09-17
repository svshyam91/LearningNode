const express = require("express");
const path = require("path");

const router = express.Router();

const products = [];

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    res.render("add-product.ejs", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        activeAddProduct: true,
        addProductCSS: true,
        shopCSS: true,
    });
});

module.exports.routes = router;
module.exports.products = products;
