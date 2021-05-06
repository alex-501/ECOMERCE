# Ecomerce

This project requires node.js. To install:

NAVIGATE TO THE DIRECTORY where you will be using this software, initialize by typing "npm init" into the terminal in the root directory of your project, and installing the following packages:

express.js
MySQL2
dotenv
sequelize
OPEN THE .env FILE AND SET ENVIRONMENT VARIABLES:

DB_NAME='ecommerce_db'
DB_USER=
DB_PW=
INITIALIZE THE DATABASE
Start MySql ("mysql -u "username" -p) with your username and password Create the database: "source ./db/schema.sql" exit SQL

SEED THE DATABASE
On the command line, type "npm run seed"

##Usage
to start-run npm start


User_Story
AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
User_Requirements
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
![image](https://user-images.githubusercontent.com/68447140/117228304-a13d9280-adcd-11eb-9833-057d199a18a3.png)


