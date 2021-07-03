'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("categories", [{
        name: "Escalada"
   }, {
        name: "Camperas"
   }, {
        name: "Calzado"
   }, {
        name: "Mochilas"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories")
  }
};
