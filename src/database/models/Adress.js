module.exports = function(sequelize, DataTypes) {
    let alias = "Adress";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName = "adresses",
        timestamps: false
    }

    let Adress = sequelize.define(alias, cols, config);

    return Adress;
}