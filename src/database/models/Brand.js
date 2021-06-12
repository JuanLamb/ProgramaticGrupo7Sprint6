module.exports = function(sequelize, DataTypes) {
    let alias = "brand";

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
        tableName = "brands",
        timestamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    return Brand;
}