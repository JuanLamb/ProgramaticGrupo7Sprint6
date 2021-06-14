'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Color, {
        as: "color",
        foreignKey: "colors_id"
    });
      Product.belongsTo(models.Brand, {
        as: "brand",
        foreignKey: "brands_id"
    });
      Product.belongsTo(models.Size, {
        as: "size",
        foreignKey: "sizes_id"
    });
      Product.belongsTo(models.Gender, {
        as: "gender",
        foreignKey: "genders_id"
    });
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categories_id"
    });
      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "products_id"
    });
      Product.belongsTo(models.OrderDetail, {
        as: "orderdetail",
        foreignKey: "products_id"
    });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    offer: DataTypes.INTEGER,
    season: DataTypes.INTEGER,
    brands_id: DataTypes.INTEGER,
    genders_id: DataTypes.INTEGER,
    colors_id: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};