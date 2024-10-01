const express = require("express");
const orderController = require("../controllers/orderController.js");

const router = express.Router();

router.post("/orders", (req, res, next) =>
  orderController.create(req, res, next)
);
router.get("/orders", (req, res, next) =>
  orderController.getAll(req, res, next)
);
router.get("/orders/:id", (req, res, next) =>
  orderController.getById(req, res, next)
);
router.put("/orders/:id", (req, res, next) =>
  orderController.update(req, res, next)
);
router.delete("/orders/:id", (req, res, next) =>
  orderController.erase(req, res, next)
);

module.exports = router;
