'use strict'

const dogs = (sequelize, DataTypes) => sequelize.define('Dogs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hasTail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
    }
});

module.exports = dogs;