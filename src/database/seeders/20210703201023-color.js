'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("colors", [{
        color: "Azul"
   }, {
        color: "Rojo"
   }, {
        color: "Amarillo"
   }, {
        color: "Negro"
   }, {
        color: "Verde"
   }, {
        color: "Blanco"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("colors")
  }
};
