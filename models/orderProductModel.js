const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const OrderProduct = sequelize.define(
  "OrderProduct",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "OrderProduct",
    tableName: "order_products",
    timestamps: false,
  }
);

module.exports = OrderProduct;
