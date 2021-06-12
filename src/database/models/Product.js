const { sequelize, DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        stock_min: {
            type: DataTypes.INTEGER
        },
        stock_max: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        offer: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.INTEGER
        },
        brands_id: {
            type: DataTypes.INTEGER
        },
        genders_id: {
            type: DataTypes.INTEGER
        },
        colors_id: {
            type: DataTypes.INTEGER
        },
        sizes_id: {
            type: DataTypes.INTEGER
        },
        categories_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName = "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "products_id"
        });
        Product.belongsTo(models.Gender, {
            as: "gender",
        });
        Product.belongsTo(models.Color, {
            as: "color",
        });
        Product.belongsTo(models.Size, {
            as: "size",
        });
        Product.belongsTo(models.Category, {
            as: "category",
        });
        Product.belongsTo(models.Brand, {
            as: "brand",
        });
        Product.belongsTo(models.Orderdetail, {
            as: "Orderdetail",
            foreignKey: "products_id"
        });
    }

    return Product;
}