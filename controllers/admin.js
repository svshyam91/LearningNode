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
    const title = req.body.title;
    const imgURL = req.body.imgURL;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imgURL, price, description);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("admin/products.ejs", {
            pageTitle: "Admin Products",
            path: "/admin/products",
            prods: products,
        });
    });
};
