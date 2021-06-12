module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING 
        },
        last_name: {
            type: DataTypes.STRING 
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        avatars_id: {
            type: DataTypes.INTEGER
        },
        categories_id: {
            type: DataTypes.INTEGER
        },
        adresses_id: {
            type: DataTypes.INTEGER
        },
    }

    let config = {
        tableName = "users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    return User;
}