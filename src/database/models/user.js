'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Adress);
      User.belongsTo(models.Avatar);
      User.hasMany(models.Order, {
        as: "orders",
        foreignkey: "users_id"
    });
      User.belongsTo(models.User_Category);
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatars_id: DataTypes.INTEGER,
    adresses_id: DataTypes.INTEGER,
    user_categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};