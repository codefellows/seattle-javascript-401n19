'use strict';

const recipe = (sequelize, DataTypes) => sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prepTime: {
    type: DataTypes.INTEGER,
  },
  cookTime: {
    type: DataTypes.INTEGER,
  }
});

module.exports = recipe;
