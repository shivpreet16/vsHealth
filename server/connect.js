const mongoose = require("mongoose");
const Sequelize = require("sequelize");

const mongoConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => {
      console.log("mongo db connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

const sqlConnect = () => {
  const connection = new Sequelize("vscodehelp", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });
  connection
    .authenticate()
    .then(() => {
      console.log("Connected to vscodehelp db");
    })
    .catch((error) => {
      console.log(error);
    });
    return connection
};

module.exports = {
  mongoConnect,
  sqlConnect,
};
