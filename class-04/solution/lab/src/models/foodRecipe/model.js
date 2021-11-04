'use strict';

const foodRecipe = (sequelize, DataTypes) => sequelize.define('FoodRecipe', {
  FoodId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Food',
      key: 'id'
    }
  },
  RecipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Recipes',
      key: 'id'
    }
  }
});

module.exports = foodRecipe;
