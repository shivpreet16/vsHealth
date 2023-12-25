const { DataTypes } = require('sequelize');
const { sqlConnect } = require('../utils/connect');
const Clinics = require('./clinics.model');

const connection = sqlConnect();

const SlotAVs = connection.define('SlotAVs', {
  savid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  did: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
  },
  day: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'slotAVs', 
  unique: {
    fields: ['did', 'cid', 'day', 'time'],
    name: 'unique_slot', 
  },
});

SlotAVs.belongsTo(Clinics, { foreignKey: 'cid' });
Clinics.hasMany(SlotAVs, { foreignKey: 'cid' });

module.exports = SlotAVs;
