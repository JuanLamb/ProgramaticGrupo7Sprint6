module.exports = function(sequelize, DataTypes) {
    let alias = "Category";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "categories",
        timestamps: false
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categories_id"
        });
    }

    return Category;
}