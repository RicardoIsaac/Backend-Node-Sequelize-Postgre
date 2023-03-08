require("dotenv").config();
module.exports = {
HOST: process.env.host,
USER: process.env.user,
PASSWORD: process.env.password,
DB: process.env.db,
dialect: "postgres",
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
};