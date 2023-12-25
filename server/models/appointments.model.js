const { DataTypes } = require('sequelize');
const { sqlConnect } = require('../utils/connect');
const User = require('./user.model');
const Slots = require('./slots.model')
const SlotAVs = require('./slotAV.model')

const connection = sqlConnect();

const Appointments = connection.define('Appointments', {
  aid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  patientName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  sid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  savid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE, 
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'appointments',
  timestamps:false
});

Appointments.belongsTo(User, { foreignKey: 'uid' });
Appointments.belongsTo(Slots, { foreignKey: 'sid' });
Appointments.belongsTo(SlotAVs, { foreignKey: 'savid' });

module.exports = Appointments;
