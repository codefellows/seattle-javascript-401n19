'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl:{
            required: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const clothesSchema = require('./clothes.js');

module.exports = {
    db: sequelize,
    Clothes: clothesSchema(sequelize, DataTypes),
};