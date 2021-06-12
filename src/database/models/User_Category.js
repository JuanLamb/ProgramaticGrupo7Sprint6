module.exports = function(sequelize, DataTypes) {
    let alias = "User_Category";

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
        tableName = "user_categories",
        timestamps: false
    }

    let User_Category = sequelize.define(alias, cols, config);

    return User_Category;
}