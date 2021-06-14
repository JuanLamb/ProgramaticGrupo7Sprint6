'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Payment, {
        as: "payments",
        foreignkey: "payments_id"
    });
      Order.belongsTo(models.State, {
        as: "states",
        foreignkey: "states_id"
    });
      Order.belongsTo(models.Shipping, {
        as: "shippings",
        foreignkey: "shippings_id"
    });
      Order.belongsTo(models.User, {
        as: "users",
        foreignkey: "users_id"
    });
      Order.hasMany(models.OrderDetail, {
        as: "orderdetails",
        foreignKey: "orders_id"
    });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    shippings_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};