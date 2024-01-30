const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Article = sequelize.define('article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  //authorId
});

module.exports = Article;