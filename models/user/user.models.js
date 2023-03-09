const { DataTypes } = require('sequelize');
module.exports=(sequelize)=>{
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
          },
          adress: {
            type: DataTypes.STRING,
            defaultValue: ""
          },
          img: {
            type: DataTypes.STRING,
            defaultValue: ""
          },
    });
    return User;
};