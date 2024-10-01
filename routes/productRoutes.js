const express = require("express");
const productController = require("../controllers/productController.js");

const router = express.Router();

router.post("/products", (req, res, next) =>
  productController.create(req, res, next)
);
router.get("/products", (req, res, next) =>
  productController.getAll(req, res, next)
);
router.get("/products/:id", (req, res, next) =>
  productController.getById(req, res, next)
);
router.put("/products/:id", (req, res, next) =>
  productController.update(req, res, next)
);
router.delete("/products/:id", (req, res, next) =>
  productController.delete(req, res, next)
);

module.exports = router;
