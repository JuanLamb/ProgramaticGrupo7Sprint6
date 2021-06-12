module.exports = function(sequelize, DataTypes) {
    let alias = "State";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description :{
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "states",
        timestamps: false
    }

    let State = sequelize.define(alias, cols, config);

    return State;
}