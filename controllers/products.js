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
    Product.fetchAll((products) => {
        res.render("shop/product-list.ejs", {
            prods: products,
            pageTitle: "Shop",
            path: "/",
            activeShop: true,
            shopCSS: true,
        });
    });
};
