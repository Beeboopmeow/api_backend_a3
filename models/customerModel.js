const DataTypes = require("sequelize");
const sequelize = require("../config/dbConnect.js");

const Customer = sequelize.define(
  "Customer",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Customer",
    tableName: "customers",
    updatedAt: false,
  }
);

module.exports = Customer;
