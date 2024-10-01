const Product = require("./productModel");
const Order = require("./orderModel");
const OrderProduct = require("./orderProductModel");

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

module.exports = { Product, Order, OrderProduct };
