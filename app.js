const express = require("express");
const routes = require("./routes");
const app = express();
const port = process.env.DB_PORT || 3000;
const sequelize = require("./config/dbConnect.js");
const errorHandler = require("./errorHandler.js");

app.use(express.json());

try {
  routes(app);
  app.use(errorHandler.errorHandler);
} catch (err) {
  console.error(err);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

require("./models/associations.js");

try {
  sequelize.sync({ force: true }).then(() => {
    console.log("Database and tables created!");
    app.listen(port, async () => {
      console.log(`app listening at http://localhost:${port}`);
    });
  });
} catch (err) {
  console.error("Connection with database failed", err);
}
