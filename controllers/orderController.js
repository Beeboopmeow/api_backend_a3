const Order = require("../models/orderModel");
const controller = require("./controller");

const orderController = controller(Order);

module.exports = orderController;
