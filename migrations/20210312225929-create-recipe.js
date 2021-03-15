'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recName: {
        type: Sequelize.STRING
      },
      recNameMore: {
        type: Sequelize.STRING
      },
      strIngredient1: {
        type: Sequelize.STRING
      },
      strIngredient2: {
        type: Sequelize.STRING
      },
      strIngredient3: {
        type: Sequelize.STRING
      },
      strIngredient4: {
        type: Sequelize.STRING
      },
      strIngredient5: {
        type: Sequelize.STRING
      },
      strMeasure1: {
        type: Sequelize.STRING
      },
      strMeasure2: {
        type: Sequelize.STRING
      },
      strMeasure3: {
        type: Sequelize.STRING
      },
      strMeasure4: {
        type: Sequelize.STRING
      },
      strMeasure5: {
        type: Sequelize.STRING
      },
      strRecipeImage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};