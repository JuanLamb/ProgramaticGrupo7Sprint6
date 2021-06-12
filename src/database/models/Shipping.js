module.exports = function(sequelize, DataTypes) {
    let alias = "Shipping";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        phoneNumber: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "shippings",
        timestamps: false
    }

    let Shipping = sequelize.define(alias, cols, config);

    return Shipping;
}