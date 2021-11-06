'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const sequelizeOptions = process.env.NODE === 'production' ? {
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const foodSchema = require('./food.js');
const clothesSchema = require('./clothes.js');

module.exports = {
  db: sequelize,
  Food: foodSchema(sequelize, DataTypes),
  Clothes: clothesSchema(sequelize, DataTypes),
};
