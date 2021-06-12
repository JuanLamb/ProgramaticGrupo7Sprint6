module.exports = function(sequelize, DataTypes) {
    let alias = "Avatar";

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
        tableName = "avatars",
        timestamps: false
    }

    let Avatar = sequelize.define(alias, cols, config);

    return Avatar;
}