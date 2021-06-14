'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      offer: {
        type: Sequelize.INTEGER
      },
      season: {
        type: Sequelize.INTEGER
      },
      brands_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brand',
          key: 'id'
        }
      },
      genders_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'gender',
          key: 'id'
        }
      },
      colors_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'color',
          key: 'id'
        }
      },
      sizes_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'size',
          key: 'id'
        }
      },
      categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
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
    await queryInterface.dropTable('Products');
  }
};