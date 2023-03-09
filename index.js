const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); //  middleware permite analizxar la solicitud en un fomato Json

app.use(bodyParser.urlencoded({ extended: true })); // middleware permite analizxar la solicitud en un fomato codificado url

const db = require("./models");

const Role = db.role;
// produccion solo se usa db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("drop and resync database");
  initial();
});

// posteo automatico de los roles
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

//
//llamo a las rutas para poderlas usar
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/product.routes")(app);
require("./routes/shopping.routes")(app);

app.use(express.json());

//lamado a la variable global port
const port = process.env.port || 8080;

//express funcionara en el port o que se le pida
app.listen(port, () => console.log(`Listening on port ${port}`));
