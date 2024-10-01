const express = require("express");
const products = require("./productRoutes.js");
const orders = require("./orderRoutes.js");

module.exports = (app) => {
  app.use(express.json(), products, orders); // rotas importadas aqui
};
