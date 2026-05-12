const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  price: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  stock: { 
    type: DataTypes.INTEGER, 
    defaultValue: 1 
  },
  status: { 
    type: DataTypes.ENUM('available', 'borrowed'), 
    defaultValue: 'available' 
  }
});

module.exports = Item;