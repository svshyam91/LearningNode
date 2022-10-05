const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list.ejs", {
            prods: products,
            pageTitle: "All Products",
            path: "/products",
            activeShop: true,
            shopCSS: true,
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect("/");
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/index.ejs", {
            prods: products,
            pageTitle: "Shop",
            path: "/",
            activeShop: true,
            shopCSS: true,
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart.ejs", {
        pageTitle: "Cart",
        path: "/cart",
    });
};

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout.ejs", {
        pageTitle: "checkout",
        path: "/checkout",
    });
};

exports.getOrders = (req, res, next) => {
    res.render("shop/orders.ejs", {
        pageTitle: "Orders",
        path: "/orders",
    });
};
