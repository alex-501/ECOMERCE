const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}
//found on website https://sequelize.org/master/manual/model-basics.html
Category.init(
  { id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true },
category_name: {
      type: DataTypes.STRING,
      allowNull: false} },
  { sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category' });

module.exports = Category;