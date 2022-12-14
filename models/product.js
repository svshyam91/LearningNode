const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, imgURL, price, description) {
        this.title = title;
        this.imgURL = imgURL;
        this.price = price;
        this.description = description;
    }

    save() {
        // To generate random number, we have used current
        this.id = Date.now().toString();
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Unable to write in file: ", err);
                }
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile((products) => {
            const product = products.find((prod) => prod.id === id);
            cb(product);
        });
    }
};
