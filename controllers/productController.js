const Product = require("../models/productModel");
const Controller = require("./Controller");

const productController = new Controller(Product);

module.exports = productController;
