require("dotenv").config();
const express = require("express");
const sequelize = require("./bd");
const port = process.env.port || 5000;
const moduls = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(`/api`, router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
