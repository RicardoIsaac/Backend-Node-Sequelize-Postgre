const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Editorial = sequelize.define("editorial", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return Editorial;
  };