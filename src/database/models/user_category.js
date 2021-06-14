'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_category.hasMany(models.User, {
        as: "users",
        foreignkey: "user_categories_id"
    });
    }
  };
  User_category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_category',
  });
  return User_category;
};