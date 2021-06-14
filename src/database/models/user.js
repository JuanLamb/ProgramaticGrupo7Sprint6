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
      User.belongsTo(models.Adress, {
        as: "adresses",
        foreignkey: "adresses_id"
    });
      User.belongsTo(models.Avatar, {
        as: "avatars",
        foreignkey: "avatars_id"
    });
      User.belongsTo(models.User_category, {
        as: "user_categories",
        foreignkey: "user_categories_id"
    });
      User.hasMany(models.Order, {
        as: "orders",
        foreignkey: "users_id"
    });
  
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