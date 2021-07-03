'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("genders", [{
        type: "Hombre"
   }, {
        type: "Mujer"
   }, {
        type: "Unisex"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("genders")
  }
};
