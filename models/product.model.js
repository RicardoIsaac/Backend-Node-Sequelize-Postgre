const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Product = sequelize.define("products", {
    Codigo: {//
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    titulo: {//
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {//
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    Existencias: {//
        type: DataTypes.NUMBER,
        allowNull: false,
      },

  });
  return Product;
};
