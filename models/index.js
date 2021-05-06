// import models
const Product = require('./Product');

const Category = require('./Category');

const Tag = require('./Tag');

const ProductTag = require('./ProductTag');



//https://sequelize.org/master/class/lib/associations/belongs-to.js~BelongsTo.html
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
//https://sequelize.org/master/class/lib/associations/has-many.js~HasMany.html
Category.hasMany(Product, {
  foreignKey: 'category_id'
});



//https://sequelize.org/master/class/lib/associations/belongs-to-many.js~BelongsToMany.html

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
