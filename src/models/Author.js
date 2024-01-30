const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Author = sequelize.define('author', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Author;