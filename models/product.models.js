const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    codigo: {//
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
    existencias: {//
        type: DataTypes.NUMBER,
        allowNull: false,
      },

  });
  return Product;
};
// autor editorial