module.exports = function(sequelize, DataTypes) {
    let alias = "Gender";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName = "genders",
        timestamps: false
    }

    Gender.associate = function(models) {
        Gender.hasMany(models.Product, {
            as: "products",
            foreignKey: "genders_id"
        });
    }

    let Gender = sequelize.define(alias, cols, config);

    return Gender;
}