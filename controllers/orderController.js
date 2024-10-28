const Order = require("../models/orderModel");
const Controller = require("./Controller");

const orderController = new Controller(Order);

module.exports = orderController;
