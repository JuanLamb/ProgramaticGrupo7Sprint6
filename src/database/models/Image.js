module.exports = function(sequelize, DataTypes) {
    let alias = "Image";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        products_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName = "images",
        timestamps: false
    }

    let Image = sequelize.define(alias, cols, config);

    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: "images_id"
        })
    }

    return Image;
}