module.exports = function(sequelize, DataTypes) {
    let alias = "Size";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "sizes",
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.hasMany(models.Product, {
            as: "products",
            foreignKey: "sizes_id"
        });
    }

    return Size;
}