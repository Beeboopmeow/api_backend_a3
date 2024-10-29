const express = require("express");
const orderController = require("../controllers/OrderController.js");

const router = express.Router();

// GET methods

router.get("/orders", (req, res, next) =>
  orderController.getAll(req, res, next)
);
router.get("/orders/:id", (req, res, next) =>
  orderController.getOneById(req, res, next)
);

// Gets all the products in a an order
router.get("/orders/:orderId/products", (req, res, next) =>
  orderController.getProductsByOrderId(req, res, next)
);
// Gets all orders from a specific customer
router.get("/customers/:customerId/orders", (req, res, next) =>
  orderController.getOrdersByCustomerId(req, res, next)
);

// POST methods

router.post("/orders", (req, res, next) =>
  orderController.placeOrder(req, res, next)
);

// PATCH methods (updates order status from "pending" to "completed")
router.patch("/orders/:orderId/status", (req, res, next) =>
  orderController.updateOrderStatus(req, res, next)
);

// DELETE methods
router.delete("/orders/:id", (req, res, next) =>
  orderController.cancelOrder(req, res, next)
);

module.exports = router;
