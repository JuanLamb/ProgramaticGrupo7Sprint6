'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.DECIMAL
      },
      shippings_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'shipping',
          key: 'id'
        }
      },
      states_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'state',
          key: 'id'
        }
      },
      payments_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payment',
          key: 'id'
        }
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};