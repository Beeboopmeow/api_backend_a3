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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Customer",
    tableName: "customers",
    updatedAt: false,
    defaultScope: {
      attributes: { exclude: ['password']},
    },
    hooks: {
      afterFind: (customers) => {
        if (Array.isArray(customers)) {
          customers.forEach(customer => {
            if (customer.password) {
              delete customer.password;
            }
          });
        } else if (customers && customer.password) {
          delete customers.password;
        }
      },
      afterCreate: (customer) => {
        delete customer.dataValues.password;
      }
    }
  }
);

module.exports = Customer;
