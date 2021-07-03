'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("brands", [{
        name: "Edelweiss"
   }, {
        name: "Black Diamond"
   }, {
        name: "Salomon"
   }, {
        name: "Marmot"
   }, {
        name: "Coleman"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands")
  }
};
