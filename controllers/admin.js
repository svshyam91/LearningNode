const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product.ejs", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        activeAddProduct: true,
        addProductCSS: true,
        shopCSS: true,
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    res.render("admin/products.ejs", {
        pageTitle: "Admin Products",
        path: "/admin/products",
    });
};