'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("sizes", [{
        type: "XL"
   }, {
        type: "L"
   }, {
        type: "M"
   }, {
        type: "S"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sizes")
  }
};
