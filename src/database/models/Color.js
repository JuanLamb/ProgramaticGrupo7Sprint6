module.exports = function(sequelize, DataTypes) {
    let alias = "Color";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "colors",
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as: "products",
            foreignKey: "colors_id"
        });
    }

    return Color;
}