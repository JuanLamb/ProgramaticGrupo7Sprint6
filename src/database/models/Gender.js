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

    let Gender = sequelize.define(alias, cols, config);

    Gender.associate = function(models) {
        Gender.hasMany(models.Product, {
            as: "products",
            foreignKey: "genders_id"
        });
    }


    return Gender;
}