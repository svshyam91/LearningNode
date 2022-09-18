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
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Unable to write in file: ", err);
                }
            });
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};
