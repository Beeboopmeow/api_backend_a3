const Order = require("../models/orderModel");
const controller = require("./Controller");

const orderController = controller(Order);

module.exports = orderController;
