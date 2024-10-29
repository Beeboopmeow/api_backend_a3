const express = require("express");
const customerController = require("../controllers/CustomerController.js");

const router = express.Router();

router.post("/customers", (req, res, next) =>
  customerController.create(req, res, next)
);
router.get("/customers", (req, res, next) =>
  customerController.getAll(req, res, next)
);
router.get("/customers/:id", (req, res, next) =>
  customerController.getOneById(req, res, next)
);
router.put("/customers/:id", (req, res, next) =>
  customerController.update(req, res, next)
);
router.delete("/customers/:id", (req, res, next) =>
  customerController.erase(req, res, next)
);

router.post("/customer/login", (req, res, next) =>
  customerController.login(req, res, next)
);

module.exports = router;
