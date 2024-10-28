const Customer = require("../models/customerModel");
const Controller = require("./Controller");

const customerController = new Controller(Customer);

module.exports = customerController;
