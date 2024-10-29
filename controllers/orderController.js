const Order = require("../models/orderModel");
const Controller = require("./Controller");
const Product = require("../models/productModel");
const OrderProduct = require("../models/orderProductModel");

class OrderController extends Controller {
  constructor() {
    super(Order);
  }

  async placeOrder(req, res, next) {
    try {
      if (!req.body.customerId) {
        throw "Order must have a customer ID";
      }
      if (!req.body.products || req.body.products.length === 0) {
        throw "Order must have at least one product";
      }

      let totalPrice = await this.validateProducts(req.body.products);

      const order = await Order.create({
        id: req.body.id,
        CustomerId: req.body.customerId,
        address: req.body.address,
        status: req.body.status,
        total: totalPrice,
        products: req.body.products,
      });

      req.body.products.forEach((p) => {
        if (!p.id || !p.amount || p.amount <= 0) {
          throw "Invalid product (missing ID or amount)";
        }
        order.addProduct(p.id, { through: { amount: p.amount } });
      });

      return res.status(201).json({ message: "Order successfully placed" });
    } catch (e) {
      next(e);
    }
  }

  async getProductsByOrderId(req, res, next) {
    try {
      const order = await Order.findByPk(req.params.orderId, {
        attributes: {
          exclude: ["createdAt", "address", "status", "CustomerId"],
        },
        include: [Product],
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      return res.status(200).json(order);
    } catch (e) {
      next(e);
    }
  }

  async getOrdersByCustomerId(req, res, next) {
    try {
      const customerOrders = await Order.findAll({
        where: { CustomerId: req.params.customerId },
        include: [Product],
      });

      if (!customerOrders.length) {
        return res
          .status(404)
          .json({ message: "No orders found for this customer" });
      }

      return res.status(200).json(customerOrders);
    } catch (e) {
      next(e);
    }
  }

  async validateProducts(products) {
    let totalPrice = 0;

    for (const product of products) {
      let foundProduct = await Product.findByPk(product.id);

      if (!foundProduct) {
        throw `Product with ID ${product.id} not found`;
      }
      totalPrice += parseFloat(foundProduct.price) * product.amount;
    }
    return totalPrice;
  }

  async updateOrderStatus(req, res, next) {
    try {
      const orderId = req.params.id;
      const updatedOrder = await Order.update(
        { status: "completed" },
        { where: { id: orderId, status: "pending" } }
      );

      if (updatedOrder[0] === 0) {
        return res
          .status(404)
          .json({ message: "Order not found or already completed" });
      }

      res.status(200).json({ message: "Order status updated to completed" });
    } catch (error) {
      next(e);
    }
  }

  async cancelOrder(req, res, next) {
    try {
      let order = await Order.findByPk(req.params.id, {
        include: Product,
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      await order.setProducts([]);
      await order.destroy({ where: { id: req.params.id } });

      return res.status(200).json({ message: "Order successfully canceled" });
    } catch (e) {
      next(e);
    }
  }
}

const orderController = new OrderController();
module.exports = orderController;
