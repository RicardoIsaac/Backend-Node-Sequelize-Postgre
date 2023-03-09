const config = require("../config/db.js")

const Sequelize = require("sequelize");

//conexion con la database
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//llamado a los modelos para creaciond e tablas y su uso
db.user = require("./user.models")(sequelize, Sequelize);
db.role = require("./role.models")(sequelize, Sequelize);

db.product = require("./product.models")(sequelize, Sequelize);
db.editorial = require("./editorial.models")(sequelize, Sequelize);
db.autor = require("./autor.models")(sequelize, Sequelize);


//relacion muchos a muchos entre usuarios y su rol
db.role.belongsToMany(db.user, {
  through: "user_roles",//como se llama la tabla intermedia
  foreignKey: "roleId", //su llave
  otherKey: "userId" //la llave de la segunda tabla
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


//relacion muchos a muchos entre productos y editoriales
db.editorial.belongsToMany(db.product,{
  through: "product_editorial",
  foreignKey: "editorialId",
  otherKey: "productId"
});
db.product.belongsToMany(db.editorial,{
  through: "product_editorial",
  foreignKey: "productId",
  otherKey: "editorialId"
});


//relacion muchos a muchos entre productos y autores
db.autor.belongsToMany(db.product,{
  through: "autor_product",
  foreignKey: "autorId",
  otherKey: "productId"
})
db.product.belongsToMany(db.autor,{
  through: "autor_product",
  foreignKey: "productId",
  otherKey: "autorId"
})


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;