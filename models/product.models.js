const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    codigo: {//
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    titulo: {//
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {//
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    existencias: {//
        type: DataTypes.INTEGER,
        allowNull: false,
      },

  });
  return Product;
};
