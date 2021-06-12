module.exports = function(sequelize, DataTypes) {
    let alias = "Orderdetail";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.DECIMAL
        },
        subtotal: {
            type: DataTypes.DECIMAL
        },
        orders_id: {
            type: DataTypes.INTEGER
        },
        products_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName = "orderdetails",
        timestamps: false
    }

    let Orderdetail = sequelize.define(alias, cols, config);

    return Orderdetail;
}