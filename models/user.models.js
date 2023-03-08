const { DataTypes } = require('sequelize');
module.exports=(sequelize, Sequelize)=>{
    const User = sequelize.define("users",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cart:{
            type: DataTypes.JSONB,
            defaultValue: {}
          }
    });
    return User;
};