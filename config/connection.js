// import the Sequelize constructor from the library
const Sequelize = require('sequelize');



require('dotenv').config();
// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.sales_db, process.env.LOCALHOST, process.env.$$Yumaaz1996$$, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3301
});


module.exports = sequelize;