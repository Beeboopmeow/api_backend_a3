const DataTypes = require("sequelize");
const sequelize = require("../config/dbConnect.js");

const Order = sequelize.define(
  "Order",
  {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    updatedAt: false,
  }
);

module.exports = Order;
