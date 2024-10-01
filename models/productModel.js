const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    updatedAt: false,
  }
);

module.exports = Product;
