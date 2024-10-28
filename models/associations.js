const Customer = require("./customerModel");
const Product = require("./productModel");
const Order = require("./orderModel");
const OrderProduct = require("./orderProductModel");

Customer.hasMany(Order);
Order.belongsTo(Customer);
Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

module.exports = { Product, Order, OrderProduct };
