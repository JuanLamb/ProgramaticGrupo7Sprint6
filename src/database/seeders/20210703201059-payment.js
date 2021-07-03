'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("payments", [{
        type: "Tarjeta de credito"
   }, {
        type: "Transferencia"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payments")
  }
};
