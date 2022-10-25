const Cart = require("../models/cart");
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
    Product.findById(prodId, (product) => {
        res.render("shop/product-detail.ejs", {
            pageTitle: product.title,
            path: "/products",
            product: product,
        });
    });
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

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(product.id, product.price);
    });
    res.redirect("/");
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
