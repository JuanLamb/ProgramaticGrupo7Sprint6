'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("states", [{
        description: "Procesando pago"
   }, {
        description: "Preparando pedido"
   }, {
        description: "En camino"
   }, {
        description: "Recibido"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("states")
  }
};
