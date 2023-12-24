const { DataTypes } = require("sequelize");
const { sqlConnect } = require('../utils/connect');

const connection = sqlConnect();
const Slots = connection.define(
  "Slots",
  {
    sid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    did: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  },
  {
    timestamps: false,
    uniqueKeys: {
      unique_slot: {
        fields: ["did", "cid", "day", "time"],
      },
    },
  }
);

module.exports = Slots;
