module.exports = function(sequelize, DataTypes) {
    let alias = "Category";

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
        tableName = "categories",
        timestamps: false
    }

    let Category = sequelize.define(alias, cols, config);

    return Category;
}