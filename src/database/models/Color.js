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

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as: "products",
            foreignKey: "colors_id"
        });
    }

    let Color = sequelize.define(alias, cols, config);

    return Color;
}