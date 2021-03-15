'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let recipes = await queryInterface.bulkInsert("Recipes", [
      { 
        recName: "Hollandaise Sauce",
        recNameMore: "Blender (Fast)",
        strIngredient1: "Butter (if salted, omit salt)",
        strIngredient2: "Egg yolks",
        strIngredient3: "Lemon juice",
        strIngredient4: "Salt",
        strIngredient5: "Cayenne pepper",
        strMeasure1: "10 Tablespoons",
        strMeasure2: "3 count",
        strMeasure3: "1 Tablespoon",
        strMeasure4: "1/2 Teaspoon",
        strMeasure5: "1/8 Teaspoon",
        txtDirections1: "Melt butter. Do not boil.",
        txtDirections2: "Blend on medium-high speed setting egg yolks, lemon juice, salt until lightened in color (about 30 seconds)",
        txtDirections3: "Set blender to low speed. Slowly drizzle in hot melted butter",
        txtDirections4: "Turn off blender. Add to taste: cayenne pepper, salt, lemon juice. Pulse blender to incorporate.",
        strRecipeImage: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Eggs_Benedict.jpg"
      },
      { 
        recName: "Alfredo Sauce",
        recNameMore: "Basic",
        strIngredient1: "Butter",
        strIngredient2: "Heavy Cream",
        strIngredient3: "Garlic (crushed)",
        strIngredient4: "Parmesan Cheese, grated",
        strIngredient5: "Parsley",
        strMeasure1: "1/4 Cup",
        strMeasure2: "1 Cup",
        strMeasure3: "1 Clove",
        strMeasure4: "1 1/2 Cups",
        strMeasure5: "1/4 Cup",
        txtDirections1: "Melt butter in saucepan over medium-low heat. Add cream and simmer for 5 minutes.",
        txtDirections2: "Add garlic and cheese and whisk until cheese is melted and incorporated. Stir in parsley and serve",
        strRecipeImage: "https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png"
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
