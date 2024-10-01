const Product = require("../models/productModel");
const controller = require("./controller");

const productController = controller(Product);

module.exports = productController;
