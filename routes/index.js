const express = require("express");
const products = require("./productRoutes.js");
const orders = require("./orderRoutes.js");
const customers = require("./customerRoutes.js");

module.exports = (app) => {
  app.use(express.json(), products, orders, customers); // imported routes here
};
