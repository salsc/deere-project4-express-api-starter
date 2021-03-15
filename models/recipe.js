'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recipe.init({
    recName: DataTypes.STRING,
    recNameMore: DataTypes.STRING,
    strIngredient1: DataTypes.STRING,
    strIngredient2: DataTypes.STRING,
    strIngredient3: DataTypes.STRING,
    strIngredient4: DataTypes.STRING,
    strIngredient5: DataTypes.STRING,
    strMeasure1: DataTypes.STRING,
    strMeasure2: DataTypes.STRING,
    strMeasure3: DataTypes.STRING,
    strMeasure4: DataTypes.STRING,
    strMeasure5: DataTypes.STRING,
    strRecipeImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};