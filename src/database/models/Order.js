module.exports = function(sequelize, DataTypes) {
    let alias = "Order";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        total: {
            type: DataTypes.DECIMAL
        },
        shippings_id: {
            type: DataTypes.INTEGER
        },
        states_id: {
            type: DataTypes.INTEGER
        },
        payments_id: {
            type: DataTypes.INTEGER
        },
        users_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName = "orders",
        timestamps: false
    }

    let Order = sequelize.define(alias, cols, config);

    return Order;
}