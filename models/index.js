// "use strict";

// require("dotenv").config();
// const fs = require("fs");
// const path = require("path");
// const basename = path.basename(__filename);
// const process = require("process");
// const Sequelize = require("sequelize");
// const db = {};

// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: "localhost",
//     dialect: "postgres",
//   }
// );

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file.indexOf(".test.js") === -1
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file));
//     if (model.init) {
//       console.log("oi");
//       model.init(sequelize, Sequelize.DataTypes);
//     }
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
