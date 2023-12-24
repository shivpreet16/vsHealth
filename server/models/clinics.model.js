const { DataTypes } = require('sequelize');
const { sqlConnect } = require('../utils/connect');

const connection = sqlConnect();

const Clinics = connection.define('Clinics', {
  cid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phNo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
    timestamps:false
});

module.exports = Clinics;
