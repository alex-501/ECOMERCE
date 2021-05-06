
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Product extends Model {}

//https://sequelize.org/master/manual/creating-with-associations.html

Product.init(  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true},


    product_name: {
      type: DataTypes.STRING,
      allowNull: false},
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true}},    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'}}},
      
//end


        {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;