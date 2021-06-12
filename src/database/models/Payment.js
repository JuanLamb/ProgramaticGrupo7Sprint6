module.exports = function(sequelize, DataTypes) {
    let alias = "Payment";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type :{
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "payments",
        timestamps: false
    }

    let Payment = sequelize.define(alias, cols, config);

    return Payment;
}