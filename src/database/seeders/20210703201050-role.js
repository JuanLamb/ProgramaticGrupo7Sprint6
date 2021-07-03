'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("roles", [{
        name: "Usuario"
   }, {
        name: "Administrador"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles")
  }
};
